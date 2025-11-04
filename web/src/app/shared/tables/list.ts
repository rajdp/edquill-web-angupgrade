export class CommonTable {
    static Admin = {
        Header: [{Name: 'First Name', ApiKey: 'first_name', SearchValue: '', HeaderClass: '', EmitValue: 'name', Class: 'text-capitalize font-weight-bold table-name'},
            {Name: 'Last Name', ApiKey: 'last_name',  SearchValue: '', Class: 'text-capitalize', EmitValue: '', HeaderClass: ''},
            {Name: 'Email-Id', ApiKey: 'email_id',  SearchValue: '', Class: '', EmitValue: '', HeaderClass: ''},
            {Name: 'Institution Name', ApiKey: 'school_name',  SearchValue: '', Class: '', EmitValue: '', HeaderClass: ''},
            {Name: 'Status', ApiKey: 'status', Class: '',  SearchValue: '', EmitValue: '', HeaderClass: ''},
            {Name: 'Actions', ApiKey: 'Actions', Class: 'col-1',  SearchValue: '', EmitValue: '', HeaderClass: 'col-1'}],
        Action: [
            { IconType: 'font', IconSrc: 'fa fa-pencil', Title: 'Edit Student', EmitValue: 'edit', Show: true, Class: 'mt-5p'},
            { IconType: 'img', IconSrc: 'assets/images/Group 17247.png', Title: 'Reset Password By Mail', EmitValue: 'mail', Show: true, Class: ''},
            { IconType: 'img', IconSrc: 'assets/images/Group 17248.png', Title: 'Reset Password Now', EmitValue: 'now', Show: true, Class: ''}]
    };
    static Student = {
        Header: [{Name: 'First Name', ApiKey: 'first_name', SearchValue: '', HeaderClass: '', EmitValue: 'name', Class: 'text-capitalize font-weight-bold table-name'},
            {Name: 'Last Name', ApiKey: 'last_name',  SearchValue: '', Class: 'text-capitalize', EmitValue: '', HeaderClass: ''},
            {Name: 'Grade', ApiKey: 'grade_name',  SearchValue: '', Class: '', EmitValue: '', HeaderClass: ''},
            {Name: 'Email-Id', ApiKey: 'email_id',  SearchValue: '', Class: '', EmitValue: '', HeaderClass: ''},
            {Name: 'Contact Number', ApiKey: 'mobile',  SearchValue: '', Class: '', EmitValue: '', HeaderClass: ''},
            {Name: 'Status', ApiKey: 'status', Class: '',  SearchValue: '', EmitValue: '', HeaderClass: ''},
            {Name: 'Actions', ApiKey: 'Actions', Class: 'col-1',  SearchValue: '', EmitValue: '', HeaderClass: 'col-1'}],
        Action: [
            { IconType: 'font', IconSrc: 'fa fa-pencil', Title: 'Edit Student', EmitValue: 'edit', Show: true, Class: 'mt-5p'},
            { IconType: 'img', IconSrc: 'assets/images/Group 17247.png', Title: 'Reset Password By Mail', EmitValue: 'mail', Show: true, Class: ''},
            { IconType: 'img', IconSrc: 'assets/images/Group 17248.png', Title: 'Reset Password Now', EmitValue: 'now', Show: true, Class: ''},
            { IconType: 'img', IconSrc: 'assets/images/icons/transfer-class-blue.png', Title: 'Transfer Class', EmitValue: 'tc', Show: true, Class: ''},
            { IconType: 'font', IconSrc: 'fa fa-newspaper-o', Title: 'Announcement', EmitValue: 'Announcement', Show: true, Class: 'ml-2 mt-1'}]
    };
    static  Teacher = {
        Header: [{Name: 'First Name', ApiKey: 'first_name', SearchValue: '', HeaderClass: '', EmitValue: 'name', Class: 'text-capitalize font-weight-bold table-name'},
            {Name: 'Last Name', ApiKey: 'last_name', SearchValue: '', Class: 'text-capitalize', EmitValue: '', HeaderClass: ''},
            {Name: 'Email-Id', ApiKey: 'email_id', SearchValue: '', Class: '', EmitValue: '', HeaderClass: ''},
            {Name: 'Contact Number', ApiKey: 'mobile', SearchValue: '', Class: '', EmitValue: '', HeaderClass: ''},
            {Name: 'Grade', ApiKey: 'profile_grade_name', SearchValue: '', Class: '', EmitValue: '', HeaderClass: ''},
            {Name: 'Subject', ApiKey: 'profile_subject_name', SearchValue: '', Class: '', EmitValue: '', HeaderClass: ''},
            {Name: 'Status', ApiKey: 'status', Class: '', SearchValue: '', EmitValue: '', HeaderClass: ''},
            {Name: 'Actions', ApiKey: 'Actions', Class: 'col-1', SearchValue: '', EmitValue: '', HeaderClass: 'col-1'}],
        Action: [
            { IconType: 'font', IconSrc: 'fa fa-pencil', Title: 'Edit Teacher', EmitValue: 'edit', Show: true, Class: 'mt-5p'},
            { IconType: 'img', IconSrc: 'assets/images/Group 17247.png', Title: 'Reset Password By Mail', EmitValue: 'mail', Show: true, Class: ''},
            { IconType: 'img', IconSrc: 'assets/images/Group 17248.png', Title: 'Reset Password Now', EmitValue: 'now', Show: true, Class: ''}]
    };
    static ContentCreator = {
        Header: [{Name: 'First Name', ApiKey: 'first_name', SearchValue: '', Class: 'text-capitalize font-weight-bold table-name', HeaderClass: '', EmitValue: 'name'},
            {Name: 'Last Name', ApiKey: 'last_name', Class: 'text-capitalize', SearchValue: '', EmitValue: '', HeaderClass: ''},
            {Name: 'Email-Id', ApiKey: 'email_id', Class: '', EmitValue: '', SearchValue: '', HeaderClass: ''},
            {Name: 'Contact Number', ApiKey: 'mobile', Class: '', EmitValue: '', SearchValue: '', HeaderClass: ''},
            {Name: 'Status', ApiKey: 'status', Class: '', EmitValue: '', SearchValue: '', HeaderClass: ''},
            {Name: 'Actions', ApiKey: 'Actions', Class: 'col-1', EmitValue: '', HeaderClass: 'col-1'}],
        Action: [
            { IconType: 'font', IconSrc: 'fa fa-pencil', Title: 'Edit Content Creator', EmitValue: 'edit', Show: true, Class: 'mt-5p'},
            { IconType: 'img', IconSrc: 'assets/images/Group 17247.png', Title: 'Reset Password By Mail', EmitValue: 'mail', Show: true, Class: ''},
            { IconType: 'img', IconSrc: 'assets/images/Group 17248.png', Title: 'Reset Password Now', EmitValue: 'now', Show: true, Class: ''}]
        };
    static Subject = {
        Header: [{Name: 'Subject Name', ApiKey: 'subject_name', HeaderClass: '', SearchValue: '', EmitValue: '', Class: ''},
            {Name: 'Description', ApiKey: 'description', Class: '', EmitValue: '', SearchValue: '', HeaderClass: ''},
            {Name: 'Subject Fee', ApiKey: 'fee_display', Class: '', EmitValue: '', SearchValue: '', HeaderClass: ''},
            {Name: 'Deposit Amount', ApiKey: 'deposit_display', Class: '', EmitValue: '', SearchValue: '', HeaderClass: ''},
            {Name: 'Status', ApiKey: 'status', Class: '', EmitValue: '', SearchValue: '', HeaderClass: ''},
            {Name: 'Actions', ApiKey: 'Actions', Class: 'col-1', EmitValue: '', SearchValue: '', HeaderClass: 'col-1'}],
        Action: [
            { IconType: 'font', IconSrc: 'fa fa-pencil', Title: 'Edit Subject', EmitValue: 'edit', Show: true, Class: ''}]
    };
    static Grade = {
        Header: [{Name: 'Grade Name', ApiKey: 'grade_name', HeaderClass: '', SearchValue: '', EmitValue: '', Class: ''},
            {Name: 'Description', ApiKey: 'description', Class: '', EmitValue: '', SearchValue: '', HeaderClass: ''},
            {Name: 'Sort Order', ApiKey: 'sorting_no', Class: '', EmitValue: '', SearchValue: '', HeaderClass: ''},
            {Name: 'Institution Name', ApiKey: 'school_name', Class: 'text-capitalize', SearchValue: '', EmitValue: '', HeaderClass: ''},
            {Name: 'Status', ApiKey: 'status', Class: '', EmitValue: '', SearchValue: '', HeaderClass: ''},
            {Name: 'Actions', ApiKey: 'Actions', Class: 'col-1', EmitValue: '', SearchValue: '', HeaderClass: 'col-1'}],
        Action: [
            { IconType: 'font', IconSrc: 'fa fa-pencil', Title: 'Edit Subject', EmitValue: 'edit', Show: true, Class: ''}]
    };
    static General = {
        Header: [{Name: 'Name', ApiKey: 'name', HeaderClass: '', EmitValue: '', SearchValue: '', Class: 'text-capitalize'},
            {Name: 'Description', ApiKey: 'description', Class: '', EmitValue: '', SearchValue: '', HeaderClass: ''},
            {Name: 'Value', ApiKey: 'value', Class: 'text-capitalize', EmitValue: '', SearchValue: '', HeaderClass: ''},
            {Name: 'Actions', ApiKey: 'Actions', Class: 'col-1', EmitValue: '',  SearchValue: '', HeaderClass: 'col-1'}],
        Action: [
            { IconType: 'font', IconSrc: 'fa fa-pencil', Title: 'Edit Subject', EmitValue: 'edit', Show: true, Class: ''}]
    };
    static Assessment = {
        Header: [{Name: 'Assessment Name', ApiKey: 'content_name', SearchValue: '', HeaderClass: '', EmitValue: 'name', Class: 'text-capitalize font-weight-bold table-name'},
            {Name: 'Answered', ApiKey: 'graded',  SearchValue: '', Class: '', EmitValue: '', HeaderClass: ''},
            {Name: 'Absent', ApiKey: 'absent',  SearchValue: '', Class: '', EmitValue: '', HeaderClass: ''},
            {Name: 'Assessment Date', ApiKey: 'start_date',  SearchValue: '', Class: '', EmitValue: '', HeaderClass: ''},
            {Name: 'Min.Score', ApiKey: 'your_score', Class: '',  SearchValue: '', EmitValue: '', HeaderClass: ''},
            {Name: 'Max.Score', ApiKey: 'total_score', Class: '',  SearchValue: '', EmitValue: '', HeaderClass: ''},
            {Name: 'Percentage Score', ApiKey: 'percentage', Class: '',  SearchValue: '', EmitValue: '', HeaderClass: ''}],
        Action: []
    };
    static Assignment = {
        Header: [{Name: 'Assignment Name', ApiKey: 'content_name', SearchValue: '', HeaderClass: '', EmitValue: 'name', Class: 'text-capitalize font-weight-bold table-name'},
            {Name: 'Answered', ApiKey: 'graded',  SearchValue: '', Class: '', EmitValue: '', HeaderClass: ''},
            {Name: 'Absent', ApiKey: 'absent',  SearchValue: '', Class: '', EmitValue: '', HeaderClass: ''},
            {Name: 'Assignment Date', ApiKey: 'start_date',  SearchValue: '', Class: '', EmitValue: '', HeaderClass: ''},
            {Name: 'Min.Score', ApiKey: 'your_score', Class: '',  SearchValue: '', EmitValue: '', HeaderClass: ''},
            {Name: 'Max.Score', ApiKey: 'total_score', Class: '',  SearchValue: '', EmitValue: '', HeaderClass: ''},
            {Name: 'Percentage Score', ApiKey: 'percentage', Class: '',  SearchValue: '', EmitValue: '', HeaderClass: ''}],
        Action: []
    };
    static GlobalAnnouncement = {
        Header: [{Name: 'Title', ApiKey: 'title', HeaderClass: '', SearchValue: '', EmitValue: '', Class: ''},
            {Name: 'Description', ApiKey: 'description', Class: '', EmitValue: '', SearchValue: '', HeaderClass: ''},
            {Name: 'From Date', ApiKey: 'from_date', Class: '', EmitValue: '', SearchValue: '', HeaderClass: ''},
            {Name: 'To Date', ApiKey: 'to_date', Class: '', EmitValue: '', SearchValue: '', HeaderClass: ''},
            {Name: 'Status', ApiKey: 'status_name', Class: '', EmitValue: '', SearchValue: '', HeaderClass: ''},
            {Name: 'Actions', ApiKey: 'Actions', Class: 'col-1', EmitValue: '', SearchValue: '', HeaderClass: 'col-1'}],
        Action: [
            { IconType: 'font', IconSrc: 'fa fa-pencil', Title: 'Edit Global Annoucement', EmitValue: 'edit', Show: true, Class: ''}]
    };
    static ReportAssessment = {
        Header: [{Name: 'Assessment Name', ApiKey: 'content_name', SearchValue: '', HeaderClass: '', EmitValue: 'name', Class: 'text-capitalize font-weight-bold table-name'},
            {Name: 'Avg. Student Score(%)', ApiKey: 'average_student_score',  SearchValue: '', Class: '', EmitValue: '', HeaderClass: ''},
            {Name: 'Assigned', ApiKey: 'assigned',  SearchValue: '', Class: '', EmitValue: '', HeaderClass: ''},
            {Name: 'Graded', ApiKey: 'graded',  SearchValue: '', Class: '', EmitValue: '', HeaderClass: ''},
            {Name: 'Absent', ApiKey: 'absent',  SearchValue: '', Class: '', EmitValue: '', HeaderClass: ''},
            {Name: 'Assessment Date', ApiKey: 'assessment_date',  SearchValue: '', Class: '', EmitValue: '', HeaderClass: ''},
            {Name: 'Min.Score', ApiKey: 'min_score', Class: '',  SearchValue: '', EmitValue: '', HeaderClass: ''},
            {Name: 'Max.Score', ApiKey: 'max_score', Class: '',  SearchValue: '', EmitValue: '', HeaderClass: ''}],
        Action: []
    };
    static ReportAssignment = {
        Header: [{Name: 'Assignment Name', ApiKey: 'content_name', SearchValue: '', HeaderClass: '', EmitValue: 'name', Class: 'text-capitalize font-weight-bold table-name'},
            {Name: 'Avg. Student Score(%)', ApiKey: 'average_student_score',  SearchValue: '', Class: '', EmitValue: '', HeaderClass: ''},
            {Name: 'Assigned', ApiKey: 'assigned',  SearchValue: '', Class: '', EmitValue: '', HeaderClass: ''},
            {Name: 'Graded', ApiKey: 'graded',  SearchValue: '', Class: '', EmitValue: '', HeaderClass: ''},
            {Name: 'Absent', ApiKey: 'absent',  SearchValue: '', Class: '', EmitValue: '', HeaderClass: ''},
            {Name: 'Assignment Date', ApiKey: 'assignment_date',  SearchValue: '', Class: '', EmitValue: '', HeaderClass: ''},
            {Name: 'Min.Score', ApiKey: 'min_score', Class: '',  SearchValue: '', EmitValue: '', HeaderClass: ''},
            {Name: 'Max.Score', ApiKey: 'max_score', Class: '',  SearchValue: '', EmitValue: '', HeaderClass: ''}],
        Action: []
    };
    static StudentReport = {
        Header: [{Name: 'Student Name', ApiKey: 'student_name', SearchValue: '', HeaderClass: '', EmitValue: 'name', Class: 'text-capitalize font-weight-bold table-name'},
            {Name: 'Avg. Student Score(%)', ApiKey: 'student_average_score',  SearchValue: '', Class: '', EmitValue: '', HeaderClass: ''},
            {Name: 'Assigned', ApiKey: 'assigned',  SearchValue: '', Class: '', EmitValue: '', HeaderClass: ''},
            {Name: 'Graded', ApiKey: 'graded',  SearchValue: '', Class: '', EmitValue: '', HeaderClass: ''},
            {Name: 'Absent', ApiKey: 'absent',  SearchValue: '', Class: '', EmitValue: '', HeaderClass: ''},
            {Name: 'Student Score', ApiKey: 'student_score', Class: '',  SearchValue: '', EmitValue: '', HeaderClass: ''},
            {Name: 'Total Score', ApiKey: 'total_score', Class: '',  SearchValue: '', EmitValue: '', HeaderClass: ''}],
        Action: []
    };
}
