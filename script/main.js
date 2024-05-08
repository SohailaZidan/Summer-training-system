const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu-btn');
const closeBtnn = document.querySelector('#close-btn');
const themeToggler= document.querySelector(".theme-toggler")
const fileInput= document.querySelector("#file-input");
const formReport= document.querySelector("#form-report");
if(localStorage.getItem('theme')=='dark'){
    document.body.classList.add('dark-Theme-variables')
}
// Dark Mode
themeToggler.addEventListener('click',()=>{

    document.body.classList.toggle('dark-Theme-variables');
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
    if(document.body.classList.contains('dark-Theme-variables')){
        localStorage.setItem('theme','dark')
    }
    else[
        localStorage.removeItem('theme')
    ]

})

// Export Excel
function exportToExcel() {
    const table = document.getElementById("invoice");
    const rows = table.querySelectorAll("tr");
    let csvContent = "data:text/csv;charset=utf-8,";

    // Include table headers
    const headerRow = table.querySelector("thead tr");
    const headerData = [];
    headerRow.querySelectorAll("th").forEach(function(cell) {
        headerData.push(cell.innerText);
    });
    csvContent += headerData.join(",") + "\n";

    // Include table data
    rows.forEach(function(row) {
        if (!row.querySelector("th")) {
            const rowData = [];
            row.querySelectorAll("td").forEach(function(cell) {
                rowData.push(cell.innerText);
            });
            csvContent += rowData.join(",") + "\n";
        }
    });

    // Create download link and trigger click
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "invoice_data.csv");
    document.body.appendChild(link);
    link.click();
}

// change language



const translator={
    en:{
        lang_en:"English",
        lang_ar:"arabic",
        home:"Home",
        profile:"profile",
        training:"my training",
        report:"Report",
        notifications:"notification",
        help:"help",
        settings:"settings",
        logout:"log out",
        totalCourse:"total courses",
        totalCompany:"total companies",
        lastHour:"last 24 hours",
        totalrequest:"total request",
        courseName:"Course name",
        companyName:"Company Name",
        hour:"hours",
        StatuS:"status",
        hey:"hey,",
        student:"student",
        companies:"companies",
        addreport:"add report",
        now:"Now",
        message_happy: "We are Happy to use TrainHub",
        edit_profile:"Edit Profile",
        profile_information: "Profile Information",
        full_name:"full_name : ",
        mobile:"mobile : ",
        email:"Email : ",
        faculty:"Faculty : ",
        remark:"Remark",
        Remark_notes:"After completing the training upload 3 things : ",
        Remark_1:"1- upload presenation.pptx",
        Remark_2:"2- upload Report.pdf",
        Remark_3:"3- upload Cetrtification.png or pdf or jpg",
        warning:"warning",
        warning_content:"if any of required reports are not submitted , the training will not be approved and the full training hours will not be token ",
        interview_message:"hello , you have an interview on",
        at:"at",
        be:"be Ready",
        faculty_help:"faculty",
        fa_1:"show information about you like evaluation's company .",
        st_1:"TrainHub Help You to find a training in any field you want ",
        st_2:"you can change your profile information . ",
        st_3:"if you finish your training must be send your reports . ",
        co_1:"you can choose any fields in Company.",
        changePassword:"Change password",
        mode:"Dark Mode",
        change_language:"languge",
        edit_image:"Edit image profile",
        edit_name:"Display name",
        edit_phone:"Phone number",
        old_pass:"old Password",
        new_pass:"New Password",
        confirm_pass:"Confirm Password",
        update:"Update",
        company:"Company",
        info_course:"Course Information",
        desc:"Description",
        content:"Content",
        duration:"Duration",
        apply:"Apply",
        department:"Department",
        gpa:"GPA",
        level:"Level",
        third:"Third",
        fourth:"Fourth",
        gender:"gender",
        male:"Male",
        female:"Female",
        submit:"Submit",
        apply_course:"Apply Course",


        fac_name:"Faculty of Computers and Artificial Intelligence",
        un_name:"University Sadat city",
        date:"Date",
        rep:"Report for :",
        s_total:"Sub Total:",
        note:"NOTE",
        note_cont:"If You Have Any Problem , Communicate With TechnoLava Team",
        print:"Print",
        1:"Student Id",
        2:"Student Name",
        3:"Email",
        4:"Department",
        5:"Level",
        11:"Company name",
        12:"Phone Number",
        13:"Location",
        14:"Description",
        15:"Branches",
        16:"Tax Number",
        17:"Tracks",
        Signature:"Signature",
        drExam:"Supervisor",
        studAff:"Student Affaires",
        singleStudent:"Student",


        rep_name:"Company informatiom",
        rep_name1:"student information",
        rep_name2:"FCAI",
        CR:"Create Reports",
        CR_C_name:"Company name",
        CR_C_phone:"Phone number",
        CR_C_url:"Company URL",
        CR_C_email:"E-mail",
        CR_C_tax:"Tax Number",
        CR_C_branch:"Branches",
        CR_C_id:"Company ID",
        CR_C_desc:"Company description",
        CR_C_Added_at:"Registration Time",
        CR_T_name:"Track name",
        CR_T_hour:"Track Hour",
        CR_T_desc:"track description",
        CR_T_cont:"Track content",
        CR_b:"Show Report",
        SR_S_name:"Student Name",
        SR_S_phone:"Phone number",
        SR_S_Dep:"Department",
        SR_S_level:"Level",
        SR_S_gpa:"GPA",
        SR_S_email:"Email",
        SR_S_Username:"User Name",
        SR_S_Files:"Files",
        SR_S_Gender:"Gender",
        SR_S_FilesUT:"Files Uploaded Time",
        SR_S_Degree:"Degree",
        SR_S_DiscussionD:"Discussion Date",
        SR_S_DiscussionT:"Discussion Time",
        SR_S_CompanyEvaluation:"Company Evaluation",
        SR_S_FacultyEvaluation:"Faculty Evaluation",
        SR_S_Pass:"password",
        SR_S_levelThird:"Third",
        SR_S_levelFourth:"Fourth",
        SR_S_Male:"male",
        SR_S_Female:"Female",
        SR_S_Completed:"completed",
        SR_S_Uncompleted:"UnCompleted",
        SR_S_Success:"Success",
        SR_S_Fail:"Fail",
        SR_Both:"Both"

    
    },
    ar:{

        fac_name:"كلية الحاسبات و الذكاء الاصطناعى",
        un_name:"جامعه مدينة السادات",
        date:"التاريخ",
        rep:"تقرير عن",
        s_total1:"اجمال عدد الشركات",
        s_total2:"اجمال عدد الطلاب",
        note:"ملحوظة",
        note_cont:"اذا كانت لديك اى مشكلة فمن فضلك تواصل مع فريقنا",
        print:"طباعة",
        1:"الرقم التعريفى",
        2:"اسم الطالب",
        3:"البريد الالكترونى",
        4:"القسم",
        5:"المستوى",
        11:"اسم الشركة",
        12:"رقم الموبايل",
        13:"الموقع",
        14:"تعريف الشركة",
        15:"الفروع",
        16:"الرقم الضريبى",
        17:"التراكات",

        lang_en:"انجليزيه",
        lang_ar:"العربيه",
        home:"رئيسيه",
        profile:"الشخصية",
        training:"تدريباتي",
        report:"تقارير التدريب",
        notifications:"الاشعارات",
        help:"المساعدة",
        settings:"الاعدادات",
        logout:"خروج",
        totalCourse:"عدد الكورسات ",
        totalCompany:"عدد الشركات",
        lastHour:"اخر 24 ساعة",
        totalrequest:"عدد التراكات",
        courseName:"اسم التدريب",
        companyName:"اسم الشركة",
        hour:"الساعات",
        StatuS:"الحالة",
        hey:"مرحبا ",
        student:"طالب",
        companies:"الشركات",
        addreport:"أضف التقارير",
        now:"الان",
        message_happy: "نحن سعداء لأستخدامك TrainHub ",
        edit_profile:"تعديل الملف الشخصى",
        profile_information: "معلومات الشخصية",
        full_name:"الاسم  ",
        mobile:"رقم الموبايل ",
        email:"الايميل  ",
        faculty:"الكلية :  ",
        remark:"ملحوظة هامة ",
        Remark_notes:"بعد الانتهاء من التدريب قم برفع 3 اشياء ",
        Remark_1:"تحمبل عرض تقديمي صيغة pptx",
        Remark_2:"تحميل تقرير صيغة pdf ",
        Remark_3:"تحميل شهادة بصيغة  png أو pdf أو jpg",
        warning:"تحذير",
        warning_content:"اذا لم يتم رفع أى من التقارير المطلوبة لا يتم اعتماد التدريب وعدم اخذ ساعات التدريب كاملة",
        interview_message:"مرحبا لديك مقابلة لمناقشة التدريب في يوم ",
        at:"الساعة ",
        be:"كن مستعدا",
        faculty_help:"الكلية",
        fa_1:"يمكنها معرفة معلومات عنك ومعرفة تقييمات الشركات",
        st_1:"TrainHub يساعدك في العثور علي تدريب فى أى مجال تريده ",
        st_2:"يمكنك تغيير معلومات الملف الشخصى لديك ",
        st_3:"اذا انتهيت من تدريبك , يجب ان ترسل تقارير هذا التريب",
        co_1:"يمكنك العثور على مجالات متعددة ترفعها الشركات واختيار شركتك المفضلة",
        changePassword:"تغير كلمة السر",
        mode:"وضع ليلي",
        change_language:"اللغة",
        edit_image:"تعديل صورة الصفحة الشخصية",
        edit_name:"تعديل الاسم ",
        edit_phone:"رقم الهاتف",
        old_pass:"كلمة السر القديمة",
        new_pass:"كلمة السر الجديدة",
        confirm_pass:"تأكيد كلمة السر الجديدة",
        update:"تغيير",
        company:"شركة",
        info_course:"معلومات عن الندريب",
        desc:"تفاصيل",
        content:"المحتوى",
        duration:"المدة",
        apply:"تسجيل",
        department:"قسم",
        gpa:"معدل التراكمى",
        level:"مرحلة",
        third:"الثالث",
        fourth:"الرابع",
        gender:"النوع",
        male:"ذكر",
        female:"أنثى",
        submit:"تسجيل",
        apply_course:"تسجيل فى التدريب",
        Signature:"توقيع",
        drExam:"المشرف",
        studAff:"شئون الطلاب",
        singleStudent:"الطالب",


        rep_name:"الشركات",
        rep_name1:"الطلاب",
        rep_name2:"FCAI",
        CR:"انشاء التقارير",
        CR_C_name:"اسم الشركة",
        CR_C_phone:"الهاتف",
        CR_C_url:"الموقع",
        CR_C_email:"البريد الالكترونى",
        CR_C_tax:"الرقم الضريبى",
        CR_C_branch:"الفروع",
        CR_C_id:"رقم الهوية",
        CR_C_desc:"تعريف الشركة",
        CR_C_Added_at:"وقت التسجيل",
        CR_T_name:"اسم التراكات",
        CR_T_hour:"عدد ساعات التراكات",
        CR_T_desc:"معلومات حول التراكات",
        CR_T_cont:"محتوى التراكات",
        CR_b:"عرض التقرير ",
        SR_S_name:"اسم الطالب ",
        SR_S_phone:"الهاتف",
        SR_S_Dep:"القسم",
        SR_S_level:"المستوى",
        SR_S_gpa:"المعدل التراكمي",
        SR_S_email:"الايميل",
        SR_S_Username:"اسم المستخدم",
        SR_S_Files:"ملفات",
        SR_S_Gender:"الجنس",
        SR_S_FilesUT:"وقت تحميل الملفات",
        SR_S_Degree:"الدرجة",
        SR_S_DiscussionD:"تاريخ المناقشة",
        SR_S_DiscussionT:"وقت المناقشة",
        SR_S_CompanyEvaluation:"تقييم الشركة",
        SR_S_FacultyEvaluation: "تقييم الكلية ",
        SR_S_Pass:"الرقم السري",
        SR_S_levelThird:"الفرقة الثالثة ",
        SR_S_levelFourth:"الفرقة الرابعة",
        SR_S_Male:"ذكر",
        SR_S_Female:"انثى",
        SR_S_Completed:"مكتمل",
        SR_S_Uncompleted:"غير مكتمل",
        SR_S_Success:"ناجح",
        SR_S_Fail:"راسب",
        SR_Both:"كلاهما"



    }

}

const language =document.querySelector("#change-language");
language.addEventListener("change", (event)=>{
    setLnguage(event.target.value);
    localStorage.setItem('languages', event.target.value)
});

document.addEventListener('DOMContentLoaded',()=>{
     setLnguage(localStorage.getItem('languages',))
});

const setLnguage=(language) =>{
const elements = document.querySelectorAll('[data-lang]');
    elements.forEach((elements)=>{
        const trans=elements.getAttribute("data-lang");
        elements.textContent= translator[language][trans]   ; 
    });
    document.dir = language == 'ar'?'rtl':'ltr' ;
}

// Show Menu
menuBtn.addEventListener('click',()=>{
    sideMenu.style.display="block";
})
// Hide Menu
closeBtnn.addEventListener('click',()=>{
    sideMenu.style.display="none";
})

// chatbot
const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");

let userMessage = null; // Variable to store user's message
const API_KEY = "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"; // Paste your API key here
const inputInitHeight = chatInput.scrollHeight;

const createChatLi = (message, className) => {
    // Create a chat <li> element with passed message and className
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", `${className}`);
    let chatContent = className === "outgoing" ? `<p></p>` : `<span><i class="fas fa-robot"></i></span><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi; // return chat <li> element
}

const generateResponse = (chatElement) => {
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const messageElement = chatElement.querySelector("p");

    // Define the properties and message for the API request
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: userMessage}],
        })
    }

    // Send POST request to API, get response and set the reponse as paragraph text
    fetch(API_URL, requestOptions).then(res => res.json()).then(data => {
        messageElement.textContent = data.choices[0].message.content.trim();
    }).catch(() => {
        messageElement.classList.add("error");
        messageElement.textContent = "Oops! Something went wrong. Please try again.";
    }).finally(() => chatbox.scrollTo(0, chatbox.scrollHeight));
}

const handleChat = () => {
    userMessage = chatInput.value.trim(); // Get user entered message and remove extra whitespace
    if(!userMessage) return;

    // Clear the input textarea and set its height to default
    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`;

    // Append the user's message to the chatbox
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);
    
    setTimeout(() => {
        // Display "Thinking..." message while waiting for the response
        const incomingChatLi = createChatLi("Typing...", "incoming");
        chatbox.appendChild(incomingChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
        generateResponse(incomingChatLi);
    }, 600);
}

chatInput.addEventListener("input", () => {
    // Adjust the height of the input textarea based on its content
    chatInput.style.height = `${inputInitHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
    // If Enter key is pressed without Shift key and the window 
    // width is greater than 800px, handle the chat
    if(e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
        e.preventDefault();
        handleChat();
    }
});

sendChatBtn.addEventListener("click", handleChat);
closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));
// end chatbot
// Print invoice
function printInvoice(){
    var content_invoice = document.getElementById('print-area').innerHTML; 
    var original_content = document.body.innerHTML;
    document.body.innerHTML = content_invoice;
    window.print(); 
    document.body.innerHTML = original_content;
}





















// file input
formReport.addEventListener("click",()=>{
    fileInput.click();
});

