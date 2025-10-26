# Required Version and steps to install, run, and generate build details

Angular - 16

Required Version:

Node - 18.16.0
NPM - 9.5.1

Steps to run an angular project locally:

1. Clone the project from git by copying the URL from the code option.

2. Select the path where you need the project to be cloned and enter this command
   "git clone <Copied Url from Git under code option>"

3. Once the Project is installed. Open the terminal of the project or manually you can
   choose the correct path to the project i.e (/Documents/Project/quill-web/web)

4. Now enter the command "npm i" to install the package and plugin.

5. After all the installation is done. You can run the project using the command "npm start".
   Once the compiler is completed you can open the localhost port for viewing the project in the browser.


Steps to generate build:

1. Choose the path of the project i.e (/Documents/Project/edquill-web/web)
   and enter the command "npm run build-prod-patch"

2. Wait till the compiler ends and after that Build file is generated under the dist folder.
   i.e./Documents/Project/edquill-web/web/dist/web.

3. Open the index.html from edquill-web/web/dist/web and remove the dot and slash from href attributes of base tag
   i.e   <base href="./"> ------> <base href="">.

4. Copy the web folder under the dist and paste the folder in the edquill-web-build under the required environment and project
