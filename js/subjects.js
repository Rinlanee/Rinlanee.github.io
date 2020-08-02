var subjects = {"01418497(5)-SEMINAR" : ["01418497-60 Seminar หมู่ 5", "หน่วยกิต (บรรยาย) : 1", "อ.ผู้สอน : ศิริกร จันทร์นวล, ชาคริต วัชโรภาส"],
                "01418442(1)-WEB TECH" : ["01418442-60 Web Technology and Web Services หมู่ 1", "หน่วยกิต (บรรยาย): 2", "อ.ผู้สอน : สุขุมาล กิติสิน"],
                "01418442(11)-WEB TECH" : ["01418442-60 Web Technology and Web Services หมู่ 11", "หน่วยกิต (ปฏิบัติ): 1", "อ.ผู้สอน : สุขุมาล กิติสิน"],
                "01418341(1)-IP" : ["01418341-60 Intellectual Properties and Professional Ethics หมู่ 1", "หน่วยกิต (บรรยาย): 3", "อ.ผู้สอน : นวลวรรณ สุนทรภิษัช"],
                "01418331(1)-OS" : ["01418331-60 Operating Systems หมู่ 1", "หน่วยกิต (บรรยาย): 4", "อ.ผู้สอน : ศิริกร จันทร์นวล"],
                "01418321(1)-SA" : ["01418321-60 System Analysis and Design หมู่ 1", "หน่วยกิต (บรรยาย): 2", "อ.ผู้สอน : สมโชค เรืองอิทธินันท์"],
                "01418321(11)-SA" : ["01418321-60 System Analysis and Design หมู่ 11", "หน่วยกิต (ปฏิบัติ): 1", "อ.ผู้สอน : สมโชค เรืองอิทธินันท์"],
                "01418471(11)-SE" : ["01418471-60 Introduction to Software Engineering หมู่ 11", "หน่วยกิต (ปฏิบัติ): 1", "อ.ผู้สอน : อุษา สัมมาพันธ์"],
                "01418471(1)-SE" : ["01418471-60 Introduction to Software Engineering หมู่ 1", "หน่วยกิต (บรรยาย): 2", "อ.ผู้สอน : อุษา สัมมาพันธ์"]}

function subjectDetail(subject){
    var allsubject = subjects[subject];
    var subdetail = "";
    for(var i = 0; i < allsubject.length; i++){
        subdetail += allsubject[i] + "<br>";
    }
    document.getElementById("showSubjectDetail").innerHTML = subdetail;
}