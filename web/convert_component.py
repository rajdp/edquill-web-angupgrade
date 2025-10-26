import sys
from pathlib import Path
from dataclasses import dataclass

@dataclass
class ComponentInfo:
    path: Path
    class_name: str

class ComponentConverter:
    def __init__(self, root: Path, component_names):
        self.root = root
        self.component_names = component_names
        self.files = list(root.rglob('*.ts'))
        self.changed_files = []

    def run(self):
        for path in self.files:
            text = path.read_text()
            for name in self.component_names:
                if f'class {name}' in text:
                    print(f"Processing {path}")
                    new_text = self.convert_to_standalone(text)
                    path.write_text(new_text)
                    self.changed_files.append(path)
                    break

    def convert_to_standalone(self, text: str) -> str:
        import re
        match = re.search(r'@Component\s*\(\s*{', text)
        if not match:
            return text
        start = match.end()
        braces = 1
        idx = start
        while idx < len(text) and braces:
            if text[idx] == '{':
                braces += 1
            elif text[idx] == '}':
                braces -= 1
            idx += 1
        metadata = text[start:idx-1]
        if 'standalone' in metadata:
            return text
        metadata_lines = metadata.split('\n')
        new_lines = []
        for line in metadata_lines:
            stripped = line.strip()
            if stripped.startswith('selector'):
                new_lines.append(line)
                new_lines.append('    standalone: true,')
            elif stripped.startswith('templateUrl'):
                template = stripped.split(':')[1].strip().strip("'\"",)
                rel_path = template
                new_lines.append(f"    template: require('./{rel_path}'),")
            else:
                new_lines.append(line)
        new_metadata = '\n'.join(new_lines)
        return text[:start] + new_metadata + text[idx-1:]

if __name__ == '__main__':
    root = Path(sys.argv[1])
    component_names = sys.argv[2:]
    converter = ComponentConverter(root, component_names)
    converter.run()
