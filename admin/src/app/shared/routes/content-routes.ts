import { Routes } from '@angular/router';

export const content: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('../../components/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: 'products',
    loadChildren: () => import('../../components/products/products.module').then(m => m.ProductsModule),
    data: {
      breadcrumb: 'Products'
    }
  },
  {
    path: 'sales',
    loadChildren: () => import('../../components/sales/sales.module').then(m => m.SalesModule),
    data: {
      breadcrumb: 'Sales'
    }
  },
  {
    path: 'coupons',
    loadChildren: () => import('../../components/coupons/coupons.module').then(m => m.CouponsModule),
    data: {
      breadcrumb: 'Coupons'
    }
  },
  {
    path: 'pages',
    loadChildren: () => import('../../components/pages/pages.module').then(m => m.PagesModule),
    data: {
      breadcrumb: 'Pages'
    }
  },
  {
    path: 'media',
    loadChildren: () => import('../../components/media/media.module').then(m => m.MediaModule),
  },
  {
    path: 'menus',
    loadChildren: () => import('../../components/menus/menus.module').then(m => m.MenusModule),
    data: {
      breadcrumb: 'Menus'
    }
  },
  {
    path: 'users',
    loadChildren: () => import('../../components/users/users.module').then(m => m.UsersModule),
    data: {
      breadcrumb: 'Users'
    }
  },
  {
    path: 'admin',
    loadChildren: () => import('../../components/admin/admin.module').then(m => m.AdminModule),
    data: {
      breadcrumb: 'Admin'
    }
  },
  {
    path: 'Content-Creator',
    loadChildren: () => import('../../components/Content-Creator/Content.module').then(m => m.ContentModule),
    data: {
      breadcrumb: 'Content-Creator'
    }
  },
  {
    path: 'School',
    loadChildren: () => import('../../components/School/School.module').then(m => m.SchoolModule),
    data: {
      breadcrumb: 'School'
    }
  },
  {
    path: 'classroom',
    loadChildren: () => import('../../components/classroom/classroom.module').then(m => m.ClassroomModule),
    data: {
      breadcrumb: 'Content Folder'
    }
  },
  {
    path: 'Teacher',
    loadChildren: () => import('../../components/Teacher/Teacher.module').then(m => m.TeacherModule),
    data: {
      breadcrumb: 'Teacher'
    }
  },
  {
    path: 'Individual-Teacher',
    loadChildren: () => import('../../components/individual-teacher/individual.module').then(m => m.IndividualModule),
    data: {
      breadcrumb: 'Individual-Teacher'
    }
  },
  {
    path: 'student',
    loadChildren: () => import('../../components/student/student.module').then(m => m.StudentModule),
    data: {
      breadcrumb: 'student'
    }
  },
  {
    path: 'Books',
    loadChildren: () => import('../../components/Books/Books.module').then(m => m.BooksModule),
    data: {
      breadcrumb: 'Books'
    }
  },
  {
    path: 'grade',
    loadChildren: () => import('../../components/grade/grade.module').then(m => m.GradeModule),
    data: {
      breadcrumb: 'Grade'
    }
  },
  {
    path: 'subject',
    loadChildren: () => import('../../components/subject/subject.module').then(m => m.SubjectModule),
    data: {
      breadcrumb: 'Subject'
    }
  },
  {
    path: 'vendors',
    loadChildren: () => import('../../components/vendors/vendors.module').then(m => m.VendorsModule),
    data: {
      breadcrumb: 'Vendors'
    }
  },
  {
    path: 'localization',
    loadChildren: () => import('../../components/localization/localization.module').then(m => m.LocalizationModule),
    data: {
      breadcrumb: 'Localization'
    }
  },
  {
    path: 'reports',
    loadChildren: () => import('../../components/reports/reports.module').then(m => m.ReportsModule),
  },
  {
    path: 'settings',
    loadChildren: () => import('../../components/setting/setting.module').then(m => m.SettingModule),
    data: {
      breadcrumb: 'Settings'
    }
  },
  {
    path: 'invoice',
    loadChildren: () => import('../../components/invoice/invoice.module').then(m => m.InvoiceModule),
    data: {
      breadcrumb: 'Invoice'
    }
  },
  {
    path: 'corporates',
    loadChildren: () => import('../../components/corporates/corporates.module').then(m => m.CorporatesModule),
    data: {
      breadcrumb: 'Corporates'
    }
  },
  {
    path: 'settings',
    loadChildren: () => import('../../components/settingsList/settingList.module').then(m => m.SettingListModule),
    data: {
      breadcrumb: 'Settings'
    }
  },
  {
    path: 'repository',
    loadChildren: () => import('../../components/repository/repositery.module').then(m => m.ContentModule),
    data: {
      breadcrumb: 'Settings'
    }
  },
  {
    path: 'careers',
    loadChildren: () => import('../../components/careers/careers.module').then(m => m.CareersModule),
    data: {
      breadcrumb: 'Careers'
    }
  },
  {
    path: 'blog',
    loadChildren: () => import('../../components/blog/blog.module').then(m => m.BlogModule),
    data: {
      breadcrumb: 'Blog'
    }
  },
  {
    path: 'testimonial',
    loadChildren: () => import('../../components/testimony/testimony.module').then(m => m.TestimonyModule),
    data: {
      breadcrumb: 'Testimony'
    }
  },
];
