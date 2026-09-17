/* ==========================================================================
   FIREBASE CONFIG & GLOBAL AUTH HANDLERS
   ========================================================================== */
const firebaseConfig = {
  apiKey: "AIzaSyCuraBGP70g64YzTkIknr1mTsY9xQrpjFs",
  authDomain: "time-team-ccc31.firebaseapp.com",
  projectId: "time-team-ccc31",
  storageBucket: "time-team-ccc31.firebasestorage.app",
  messagingSenderId: "378099824478",
  appId: "1:378099824478:web:9e6a42ec53119a717141cf",
  measurementId: "G-8S1Y7V9X2T"
};

let auth = null;
let provider = null;

if (typeof firebase !== "undefined") {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  auth = firebase.auth();
  provider = new firebase.auth.GoogleAuthProvider();

  auth.onAuthStateChanged((user) => {
    const btnLogin = document.getElementById("btn-login");
    const userInfo = document.getElementById("user-info");
    const userName = document.getElementById("user-name");
    const userAvatar = document.getElementById("user-avatar");

    if (user) {
      if (btnLogin) btnLogin.style.display = "none";
      if (userInfo) userInfo.style.display = "flex";
      if (userName) userName.textContent = user.displayName;
      if (userAvatar) userAvatar.src = user.photoURL || "";
    } else {
      if (btnLogin) btnLogin.style.display = "flex";
      if (userInfo) userInfo.style.display = "none";
    }
  });
}

// ฟังก์ชันล็อกอินระดับ Global เรียกใช้โดยตรงจาก onclick บนปุ่ม
window.handleGoogleLogin = function () {
  if (!auth) {
    alert("ระบบ Firebase กำลังเริ่มต้น กรุณาลองใหม่อีกครั้งใน 2 วินาที");
    return;
  }
  auth.signInWithPopup(provider).catch((error) => {
    alert("เกิดข้อผิดพลาดในการเข้าสู่ระบบ: " + error.message);
  });
};

// ฟังก์ชันออกจากระบบระดับ Global
window.handleGoogleLogout = function () {
  if (auth) {
    auth.signOut();
  }
};

/* ==========================================================================
   TRANSLATION DICTIONARY (THAI / ENGLISH)
   ========================================================================== */
const I18N = {
  th: {
    nav_overview: "ภาพรวม",
    nav_schedule: "ตารางเวลา",
    nav_matrix: "แมทริกซ์",
    nav_me: "ของฉัน",
    btn_1week: "1 สัปดาห์",
    btn_2weeks: "2 สัปดาห์",
    btn_find_time: "ค้นหาเวลาว่าง",
    ov_title: "ภาพรวมทีม",
    ov_subtitle: (count) => `ความพร้อม ตารางเวลา และภาพรวมงานสำคัญของสมาชิก ${count} คน`,
    best_shared_title: "ช่วงเวลาที่ว่างพร้อมกันมากที่สุด",
    best_shared_caption: (days) => `ช่วงเวลาแนะนำที่ดีที่สุดในอีก ${days} วันข้างหน้า`,
    top_3_recs: "3 อันดับแนะนำ",
    team_sched_ov_title: "ภาพรวมตารางเวลาทีม",
    team_sched_ov_desc: "สแกนแนวนอนดูรายคน หรือแนวตั้งดูความพร้อมของทั้งทีม",
    status_free: "ว่าง",
    status_available: "ว่าง",
    status_working: "กำลังทำงาน",
    status_work: "ทำงาน",
    status_busy: "ติดธุระ",
    status_nodata: "ไม่มีข้อมูล",
    status_live: "สด",
    team_now_title: "สถานะทีมตอนนี้",
    pri_snapshot_title: "ภาพรวมความสำคัญงาน",
    btn_open_matrix: "เปิดแมทริกซ์ →",
    upcoming_deadlines_title: "เดดไลน์ที่ใกล้ถึง",
    sched_page_title: "ตารางการทำงาน",
    scope_team: "ทีม",
    scope_person: "รายบุคคล",
    mode_overview: "ภาพรวม",
    mode_detailed: "ละเอียด",
    matrix_page_title: "แมทริกซ์จัดลำดับความสำคัญ",
    matrix_page_desc: "กรอบการตัดสินใจ Eisenhower 2×2 และการกระจายภาระงานของทีม",
    btn_add_task: "+ งาน",
    btn_add_block: "+ ลงเวลา",
    btn_copy_week: "คัดลอกสัปดาห์ก่อนหน้า",
    acting_as: "ใช้งานในชื่อ:",
    me_subtitle: "ลงเวลาทำงาน งานที่ได้รับมอบหมาย และสัดส่วนความสำคัญส่วนตัว",
    my_schedule_title: "ตารางเวลาของฉัน",
    my_tasks_title: "งานของฉัน",
    my_priority_title: "สัดส่วนความสำคัญงานของฉัน",
    q1_name: "สำคัญ + เร่งด่วน",
    q2_name: "สำคัญ + ไม่เร่งด่วน",
    q3_name: "ไม่สำคัญ + เร่งด่วน",
    q4_name: "ไม่สำคัญ + ไม่เร่งด่วน",
    label_date: "วันที่",
    label_start_time: "เวลาเริ่ม [HH:mm]",
    label_end_time: "เวลาสิ้นสุด [HH:mm]",
    label_shortcuts: "ปุ่มลัด:",
    label_status: "สถานะ",
    label_linked_task: "ผูกกับงาน",
    btn_create_task_inline: "+ สร้างงานใหม่",
    label_short_reason: "ระบุเหตุผลสั้น ๆ",
    btn_clear_block: "ลบบล็อกนี้",
    btn_save_block: "บันทึกบล็อกเวลา",
    block_modal_desc: "ระบุเวลาละเอียดระดับนาที",
    new_task_title: "สร้างงานใหม่",
    new_task_desc: "กำหนดเดดไลน์และระดับความสำคัญ",
    label_task_title: "ชื่องาน",
    label_assignee: "ผู้รับผิดชอบ",
    label_deadline_date: "วันที่ส่ง (Deadline)",
    btn_add_time: "+ เพิ่มเวลา",
    label_deadline_time: "เวลาส่ง [HH:mm]",
    label_is_important: "งานนี้สำคัญหรือไม่?",
    label_is_urgent: "งานนี้เร่งด่วนหรือไม่?",
    choice_yes: "ใช่",
    choice_no: "ไม่ใช่",
    btn_save_task: "บันทึกงาน",
    find_time_modal_title: "ค้นหาเวลาว่างพร้อมกัน",
    find_time_modal_desc: "คำนวณจากตารางเวลาจริงของสมาชิกที่เปิดใช้งาน",
    label_duration: "ระยะเวลาที่ต้องการ",
    label_people: "ผู้เข้าร่วม",
    scope_everyone: (count) => `ทุกคน (${count})`,
    scope_select_members: "เลือกบางคน",
    label_min_people: "จำนวนคนที่ต้องว่างอย่างน้อย",
    btn_find_matches: "ค้นหาช่วงเวลา",
    results_heading: "ผลการค้นหา",
    drawer_meta: "ตรวจสอบรายละเอียด",
    team_settings_title: "ตั้งค่าทีมและสมาชิก",
    team_settings_desc: "จัดการสมาชิกทีม สถานะใช้งาน และขนาดของทีม",
    btn_add_member: "+ เพิ่มสมาชิก",
    th_member_name: "ชื่อสมาชิก",
    th_status: "สถานะ",
    th_actions: "จัดการ",
    status_active: "ใช้งานอยู่",
    status_inactive: "ปิดใช้งาน",
    btn_toggle_active: "เปลี่ยนสถานะ",
    btn_edit_name: "แก้ไข",
    empty_no_tasks: "ไม่มีงานในช่องนี้",
    empty_no_assigned: "ไม่มีงานที่ได้รับมอบหมาย",
    empty_no_slots: "ไม่พบช่วงเวลาที่ตรงตามเกณฑ์ที่กำหนด",
    insight_urgent: (c) => `<strong>${c} งาน</strong> ครบกำหนดภายใน 48 ชั่วโมง`,
    insight_unassigned: (c) => `<strong>${c} งานสำคัญ</strong> ยังไม่มีการลงเวลาทำงานในตาราง`,
    mutual_availability: "ความพร้อมของทีม:",
    inspect_arrow: "ตรวจสอบ →"
  },
  en: {
    nav_overview: "Overview",
    nav_schedule: "Schedule",
    nav_matrix: "Matrix",
    nav_me: "Me",
    btn_1week: "1 Week",
    btn_2weeks: "2 Weeks",
    btn_find_time: "Find a Time",
    ov_title: "Team Overview",
    ov_subtitle: (count) => `Capacity, schedule timeline, and priority snapshot for ${count} members`,
    best_shared_title: "Best Shared Time",
    best_shared_caption: (days) => `Optimal mutual slots for next ${days} days`,
    top_3_recs: "Top 3 recommendations",
    team_sched_ov_title: "Team Schedule Overview",
    team_sched_ov_desc: "Scan rows for member timeline or columns for team availability",
    status_free: "Free",
    status_available: "Available",
    status_working: "Working",
    status_work: "Work",
    status_busy: "Busy",
    status_nodata: "No Data",
    status_live: "Live",
    team_now_title: "Team Now",
    pri_snapshot_title: "Priority Snapshot",
    btn_open_matrix: "Open Matrix →",
    upcoming_deadlines_title: "Upcoming Deadlines",
    sched_page_title: "Operational Schedule",
    scope_team: "Team",
    scope_person: "Person",
    mode_overview: "Overview",
    mode_detailed: "Detailed",
    matrix_page_title: "Priority Matrix",
    matrix_page_desc: "Eisenhower 2×2 decision framework and team workload distribution",
    btn_add_task: "+ Task",
    btn_add_block: "+ Schedule Block",
    btn_copy_week: "Copy previous week",
    acting_as: "Acting as:",
    me_subtitle: "Schedule input, active work tasks and priority load",
    my_schedule_title: "My Schedule",
    my_tasks_title: "My Tasks",
    my_priority_title: "My Priority Distribution",
    q1_name: "Important + Urgent",
    q2_name: "Important + Not Urgent",
    q3_name: "Not Important + Urgent",
    q4_name: "Not Important + Not Urgent",
    label_date: "Date",
    label_start_time: "Start Time [HH:mm]",
    label_end_time: "End Time [HH:mm]",
    label_shortcuts: "Shortcuts:",
    label_status: "Status",
    label_linked_task: "Linked Task",
    btn_create_task_inline: "+ Create New Task",
    label_short_reason: "Short Reason",
    btn_clear_block: "Clear Block",
    btn_save_block: "Save Block",
    block_modal_desc: "Accurate to the minute",
    new_task_title: "New Task",
    new_task_desc: "Define deadline and priority classification",
    label_task_title: "Task Title",
    label_assignee: "Assignee",
    label_deadline_date: "Deadline Date",
    btn_add_time: "+ Add time",
    label_deadline_time: "Deadline Time [HH:mm]",
    label_is_important: "Is this Important?",
    label_is_urgent: "Is this Urgent?",
    choice_yes: "Yes",
    choice_no: "No",
    btn_save_task: "Save Task",
    find_time_modal_title: "Find a Time",
    find_time_modal_desc: "Calculated from actual schedule data of active members",
    label_duration: "Duration",
    label_people: "People",
    scope_everyone: (count) => `Everyone (${count})`,
    scope_select_members: "Select People",
    label_min_people: "Minimum Available People",
    btn_find_matches: "Find Matches",
    results_heading: "Matching Slots",
    drawer_meta: "INSPECTOR",
    team_settings_title: "Team & Member Settings",
    team_settings_desc: "Manage team roster, active status and capacity size",
    btn_add_member: "+ Add Member",
    th_member_name: "Member Name",
    th_status: "Status",
    th_actions: "Actions",
    status_active: "Active",
    status_inactive: "Inactive",
    btn_toggle_active: "Toggle Status",
    btn_edit_name: "Rename",
    empty_no_tasks: "No tasks in this quadrant",
    empty_no_assigned: "No tasks assigned to you",
    empty_no_slots: "No mutual slots match your criteria",
    insight_urgent: (c) => `<strong>${c} tasks</strong> due within 48 hours`,
    insight_unassigned: (c) => `<strong>${c} important tasks</strong> have no scheduled work time`,
    mutual_availability: "Mutual Availability:",
    inspect_arrow: "Inspect →"
  }
};

let currentLang = "th";
function t(key, ...args) {
  const dict = I18N[currentLang] || I18N.th;
  const val = dict[key];
  if (typeof val === "function") return val(...args);
  return val || key;
}

/* ==========================================================================
   CENTRAL DATA ARCHITECTURE
   ========================================================================== */
const APP_DATA = {
  activeView: "overview",
  overviewRange: "2w",

  scheduleScope: "team",
  scheduleMode: "overview",
  scheduleSelectedPersonId: 1,
  scheduleRange: "2w",
  scheduleDetailedDay: "2026-09-18",

  matrixFilterMode: "team",
  matrixSelectedMemberId: 1,
  currentUserId: 1,

  quadrants: {
    q1: { code: "q1", labelKey: "q1_name", css: "pri-q1" },
    q2: { code: "q2", labelKey: "q2_name", css: "pri-q2" },
    q3: { code: "q3", labelKey: "q3_name", css: "pri-q3" },
    q4: { code: "q4", labelKey: "q4_name", css: "pri-q4" }
  },

  days: [
    { key: "2026-09-18", dateStr: "Thu 18 Sep", short: "18 Sep", in1w: true },
    { key: "2026-09-19", dateStr: "Fri 19 Sep", short: "19 Sep", in1w: true },
    { key: "2026-09-20", dateStr: "Sat 20 Sep", short: "20 Sep", in1w: true },
    { key: "2026-09-21", dateStr: "Sun 21 Sep", short: "21 Sep", in1w: true },
    { key: "2026-09-22", dateStr: "Mon 22 Sep", short: "22 Sep", in1w: true },
    { key: "2026-09-23", dateStr: "Tue 23 Sep", short: "23 Sep", in1w: true },
    { key: "2026-09-24", dateStr: "Wed 24 Sep", short: "24 Sep", in1w: true },
    { key: "2026-09-25", dateStr: "Thu 25 Sep", short: "25 Sep", in1w: false },
    { key: "2026-09-26", dateStr: "Fri 26 Sep", short: "26 Sep", in1w: false },
    { key: "2026-09-27", dateStr: "Sat 27 Sep", short: "27 Sep", in1w: false },
    { key: "2026-09-28", dateStr: "Sun 28 Sep", short: "28 Sep", in1w: false },
    { key: "2026-09-29", dateStr: "Mon 29 Sep", short: "29 Sep", in1w: false },
    { key: "2026-09-30", dateStr: "Tue 30 Sep", short: "30 Sep", in1w: false },
    { key: "2026-10-01", dateStr: "Wed 01 Oct", short: "01 Oct", in1w: false }
  ],

  periods: [
    { key: "morning", label: "Morning", time: "09:00–12:00", startMin: 540, endMin: 720 },
    { key: "afternoon", label: "Afternoon", time: "13:00–17:00", startMin: 780, endMin: 1020 },
    { key: "evening", label: "Evening", time: "18:00–21:00", startMin: 1080, endMin: 1260 }
  ],

  members: [
    { id: 1, name: "เอ", active: true },
    { id: 2, name: "โบ", active: true },
    { id: 3, name: "ฟ้า", active: true },
    { id: 4, name: "กร", active: true },
    { id: 5, name: "อุ้ม", active: true },
    { id: 6, name: "แพร", active: true },
    { id: 7, name: "แม็ก", active: true },
    { id: 8, name: "นิ", active: true },
    { id: 9, name: "ปิ่น", active: true },
    { id: 10, name: "จ๊อบ", active: true }
  ],

  tasks: [
    { id: "task-1", title: "Community Report", ownerId: 3, deadlineDate: "2026-09-19", deadlineTime: "17:00", quadrant: "q1", urgent: true, status: "In Progress", note: "Waiting on regional survey results" },
    { id: "task-2", title: "Budget Proposal", ownerId: 2, deadlineDate: "2026-09-20", deadlineTime: "12:00", quadrant: "q1", urgent: true, status: "Review", note: "Annual operational budget submission" },
    { id: "task-3", title: "Event Poster Draft", ownerId: 5, deadlineDate: "2026-09-21", deadlineTime: null, quadrant: "q3", urgent: true, status: "Drafting", note: "Print and online formats" },
    { id: "task-4", title: "Sponsor Outreach", ownerId: 7, deadlineDate: "2026-09-24", deadlineTime: "15:30", quadrant: "q2", urgent: false, status: "Outreach", note: "Pitch deck distribution to partners" },
    { id: "task-5", title: "Backlog Grooming", ownerId: 1, deadlineDate: "2026-09-28", deadlineTime: null, quadrant: "q4", urgent: false, status: "Planned", note: "Review unscheduled tasks" },
    { id: "task-6", title: "Research Synthesis", ownerId: 4, deadlineDate: "2026-09-30", deadlineTime: null, quadrant: "q2", urgent: false, status: "Writing", note: "Literature review chapter" },
    { id: "task-7", title: "Safety Protocol Review", ownerId: 3, deadlineDate: "2026-09-20", deadlineTime: "10:00", quadrant: "q1", urgent: true, status: "In Progress", note: "Activity ground compliance" },
    { id: "task-8", title: "Permit Clearance", ownerId: 3, deadlineDate: "2026-09-22", deadlineTime: null, quadrant: "q1", urgent: true, status: "Pending", note: "District office endorsement" },
    { id: "task-9", title: "Speaker Briefing Deck", ownerId: 3, deadlineDate: "2026-09-23", deadlineTime: "14:00", quadrant: "q1", urgent: true, status: "Drafting", note: "Guideline deck for guest speakers" },
    { id: "task-10", title: "Volunteer Alignment Call", ownerId: 8, deadlineDate: "2026-09-22", deadlineTime: "19:00", quadrant: "q3", urgent: true, status: "Scheduled", note: "Coordinate 15 logistics volunteers" }
  ],

  blocks: [
    { id: "b1", memberId: 1, dateKey: "2026-09-18", start: "08:30", end: "12:00", type: "available" },
    { id: "b2", memberId: 1, dateKey: "2026-09-18", start: "13:00", end: "17:00", type: "available" },
    { id: "b3", memberId: 1, dateKey: "2026-09-18", start: "18:00", end: "20:30", type: "busy", reason: "Family dinner" },
    { id: "b4", memberId: 2, dateKey: "2026-09-18", start: "09:40", end: "11:10", type: "work", taskId: "task-2" },
    { id: "b5", memberId: 2, dateKey: "2026-09-18", start: "13:30", end: "17:00", type: "available" },
    { id: "b6", memberId: 3, dateKey: "2026-09-18", start: "09:00", end: "12:00", type: "busy", reason: "Faculty Seminar" },
    { id: "b7", memberId: 3, dateKey: "2026-09-18", start: "13:15", end: "14:45", type: "work", taskId: "task-1" },
    { id: "b8", memberId: 3, dateKey: "2026-09-18", start: "15:00", end: "18:00", type: "available" },
    { id: "b9", memberId: 4, dateKey: "2026-09-18", start: "08:00", end: "16:00", type: "available" },
    { id: "b10", memberId: 5, dateKey: "2026-09-18", start: "09:00", end: "13:00", type: "available" },
    { id: "b11", memberId: 5, dateKey: "2026-09-18", start: "14:00", end: "16:00", type: "work", taskId: "task-3" },
    { id: "b12", memberId: 7, dateKey: "2026-09-18", start: "10:00", end: "15:30", type: "available" },
    { id: "b13", memberId: 7, dateKey: "2026-09-18", start: "16:20", end: "17:05", type: "work", taskId: "task-4" },
    { id: "b14", memberId: 8, dateKey: "2026-09-18", start: "08:30", end: "17:00", type: "available" },
    { id: "b15", memberId: 9, dateKey: "2026-09-18", start: "09:00", end: "18:00", type: "available" },
    { id: "b16", memberId: 10, dateKey: "2026-09-18", start: "13:00", end: "18:00", type: "busy", reason: "Field trip" }
  ],

  blockNotes: {
    "b3": ["President: Family dinner noted."]
  }
};

/* ==========================================================================
   DYNAMIC ROSTER & AVAILABILITY HELPERS
   ========================================================================== */
function getActiveMembers() {
  return APP_DATA.members.filter((m) => m.active);
}

function parseTimeToMinutes(tStr) {
  if (!tStr) return 0;
  const [h, m] = tStr.split(":").map(Number);
  return h * 60 + m;
}

function formatMinutesToTime(min) {
  const h = String(Math.floor(min / 60)).padStart(2, '0');
  const m = String(min % 60).padStart(2, '0');
  return `${h}:${m}`;
}

function getMemberStatusInRange(memberId, dateKey, startMin, endMin) {
  const memberBlocks = APP_DATA.blocks.filter((b) => b.memberId === memberId && b.dateKey === dateKey);
  if (memberBlocks.length === 0) return { type: "nodata", reason: t("status_nodata") };

  for (const b of memberBlocks) {
    const bStart = parseTimeToMinutes(b.start);
    const bEnd = parseTimeToMinutes(b.end);
    if (bStart < endMin && bEnd > startMin) {
      return b;
    }
  }
  return { type: "nodata", reason: t("status_nodata") };
}

function calculateExactQuorum(dateKey, startMin, endMin, targetMemberIds = null) {
  const activeRoster = getActiveMembers();
  const members = targetMemberIds ?
    activeRoster.filter((m) => targetMemberIds.includes(m.id)) :
    activeRoster;

  let availableCount = 0;
  const conflicts = [];
  const availableMembers = [];

  members.forEach((m) => {
    const status = getMemberStatusInRange(m.id, dateKey, startMin, endMin);
    if (status.type === "available") {
      availableCount++;
      availableMembers.push(m);
    } else {
      let taskObj = status.taskId ? APP_DATA.tasks.find((t) => t.id === status.taskId) : null;
      conflicts.push({
        memberId: m.id,
        name: m.name,
        type: status.type,
        reason: status.reason || (taskObj ? `${t("status_work")}: ${taskObj.title}` : t("status_busy")),
        task: taskObj,
        block: status
      });
    }
  });

  return { total: members.length, available: availableCount, conflicts, availableMembers };
}

function formatTaskDeadline(task) {
  const day = APP_DATA.days.find((d) => d.key === task.deadlineDate);
  const dateText = day ? day.short : task.deadlineDate;
  return task.deadlineTime ? `${dateText} · ${task.deadlineTime}` : dateText;
}

function sortTasksByDeadline(a, b) {
  const timeA = a.deadlineTime ? `${a.deadlineDate}T${a.deadlineTime}` : `${a.deadlineDate}T23:59`;
  const timeB = b.deadlineTime ? `${b.deadlineDate}T${b.deadlineTime}` : `${b.deadlineDate}T23:59`;
  return timeA.localeCompare(timeB);
}

/* ==========================================================================
   APP INITIALIZATION
   ========================================================================== */
function initEntireApp() {
  setupNavigation();
  setupGlobalControls();
  initPersonPickers();
  updateStaticTranslations();
  refreshAllActiveViews();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initEntireApp);
} else {
  initEntireApp();
}

function setLanguage(lang) {
  currentLang = lang;
  const thBtn = document.getElementById("lang-th");
  const enBtn = document.getElementById("lang-en");
  if (thBtn) thBtn.classList.toggle("active", lang === "th");
  if (enBtn) enBtn.classList.toggle("active", lang === "en");
  document.documentElement.lang = lang;
  updateStaticTranslations();
  refreshAllActiveViews();
}

function updateStaticTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.innerHTML = t(key);
  });
}

function setupNavigation() {
  document.querySelectorAll("[data-view]").forEach((btn) => {
    btn.addEventListener("click", () => {
      APP_DATA.activeView = btn.getAttribute("data-view");
      document.querySelectorAll(".page-view").forEach((v) => {
        v.style.display = "none";
        v.classList.remove("active");
      });
      const activeEl = document.getElementById(`view-${APP_DATA.activeView}`);
      if (activeEl) {
        activeEl.style.display = "block";
        activeEl.classList.add("active");
      }
      document.querySelectorAll("[data-view]").forEach((b) => b.classList.toggle("active", b.getAttribute("data-view") === APP_DATA.activeView));
      refreshAllActiveViews();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  const btnTh = document.getElementById("lang-th");
  const btnEn = document.getElementById("lang-en");
  if (btnTh) btnTh.addEventListener("click", () => setLanguage("th"));
  if (btnEn) btnEn.addEventListener("click", () => setLanguage("en"));
}

function refreshAllActiveViews() {
  const activeCount = getActiveMembers().length;
  const subtitleEl = document.getElementById("ov-team-subtitle");
  const pillEl = document.getElementById("pill-everyone-label");
  if (subtitleEl) subtitleEl.innerText = t("ov_subtitle", activeCount);
  if (pillEl) pillEl.innerText = t("scope_everyone", activeCount);

  renderOverviewSharedSlots();
  renderOverviewSchedule();
  renderTeamNowSummary();
  renderOverviewMatrixSnapshot();
  renderOverviewDeadlines();

  renderScheduleView();
  renderEisenhowerMatrix();
  renderMePage();
}

/* ==========================================================================
   VIEW 1: OVERVIEW IMPLEMENTATION
   ========================================================================== */
function renderOverviewSharedSlots() {
  const container = document.getElementById("shared-time-list");
  if (!container) return;

  const days = APP_DATA.overviewRange === "1w" ? APP_DATA.days.filter((d) => d.in1w) : APP_DATA.days;
  const candidateSlots = [];

  days.forEach((day) => {
    APP_DATA.periods.forEach((p) => {
      const q = calculateExactQuorum(day.key, p.startMin, p.endMin);
      candidateSlots.push({ day, period: p, quorum: q, score: q.available });
    });
  });

  candidateSlots.sort((a, b) => b.score - a.score);
  const top3 = candidateSlots.slice(0, 3);

  container.innerHTML = top3.map((item, idx) => `
    <div class="slot-card" style="padding:16px; border:1px solid #eee; border-radius:8px; cursor:pointer;" onclick="openRangeInspector('${item.day.key}', ${item.period.startMin}, ${item.period.endMin}, '${item.day.dateStr} · ${item.period.label} (${item.period.time})')">
      <div style="font-size:0.8rem; color:#888;">${t("top_3_recs")} #${idx + 1}</div>
      <div style="font-weight:700; font-size:1.1rem; margin:4px 0;">${item.day.dateStr}</div>
      <div style="color:#555;">${item.period.label} (${item.period.time})</div>
      <div style="display:flex; justify-content:space-between; margin-top:12px; font-size:0.85rem;">
        <span style="color:green; font-weight:600;">${item.quorum.available} / ${item.quorum.total} ${t("status_available")}</span>
        <span>${t("inspect_arrow")}</span>
      </div>
    </div>
  `).join("");

  const captionEl = document.getElementById("best-shared-caption");
  if (captionEl) {
    captionEl.innerText = t("best_shared_caption", APP_DATA.overviewRange === '1w' ? '7' : '14');
  }
}

function renderOverviewSchedule() {
  const table = document.getElementById("team-schedule-table");
  if (!table) return;

  const days = APP_DATA.overviewRange === "1w" ? APP_DATA.days.filter((d) => d.in1w) : APP_DATA.days;
  const periods = APP_DATA.periods;
  const activeRoster = getActiveMembers();
  const columns = [];

  days.forEach((day) => {
    periods.forEach((period) => {
      const q = calculateExactQuorum(day.key, period.startMin, period.endMin);
      const isHigh = q.total > 0 && q.available / q.total >= 0.8;
      columns.push({ day, period, available: q.available, total: q.total, isHigh });
    });
  });

  let thead = `
    <thead>
      <tr style="background:#fafafa; border-bottom:1px solid #eee;">
        <th style="padding:8px 12px; text-align:left;" rowspan="2">${t("th_member_name")}</th>
        ${days.map((d) => `<th style="padding:8px; text-align:center; border-left:1px solid #eee;" colspan="3">${d.short}</th>`).join("")}
      </tr>
      <tr style="background:#fafafa; border-bottom:1px solid #eee;">
        ${columns.map((c) => `<th style="padding:4px; font-size:0.75rem; text-align:center;">${c.period.label[0]}</th>`).join("")}
      </tr>
    </thead>
  `;

  let quorumRow = `
    <tr style="background:#fcfcfc; border-bottom:1px solid #eee;">
      <td style="padding:8px 12px; font-weight:700; color:#555;">${t("status_free")}</td>
      ${columns.map((c) => `
        <td style="padding:4px; font-size:0.75rem; text-align:center; font-weight:600; color:${c.isHigh ? 'green' : '#666'};">
          ${c.available}/${c.total}
        </td>
      `).join("")}
    </tr>
  `;

  let body = activeRoster.map((m) => {
    let cells = columns.map((c) => {
      const st = getMemberStatusInRange(m.id, c.day.key, c.period.startMin, c.period.endMin);
      let label = st.type === "available" ? "ว่าง" : st.type === "work" ? "งาน" : st.type === "busy" ? "ธุระ" : "—";
      let bg = st.type === "available" ? "#e8f5e9" : st.type === "work" ? "#e3f2fd" : st.type === "busy" ? "#ffebee" : "#f5f5f5";
      return `
        <td style="padding:4px; text-align:center;">
          <div style="background:${bg}; padding:4px 2px; border-radius:4px; font-size:0.7rem; cursor:pointer;" onclick="openRangeInspector('${c.day.key}', ${c.period.startMin}, ${c.period.endMin}, '${c.day.dateStr} · ${c.period.label}')">
            ${label}
          </div>
        </td>
      `;
    }).join("");

    return `<tr style="border-bottom:1px solid #f0f0f0;"><td style="padding:8px 12px; font-weight:500;">${m.name}</td>${cells}</tr>`;
  }).join("");

  table.innerHTML = `${thead}<tbody>${quorumRow}${body}</tbody>`;
}

function renderTeamNowSummary() {
  const container = document.getElementById("team-now-list");
  if (!container) return;
  const counts = { available: 0, work: 0, busy: 0, nodata: 0 };
  const todayKey = "2026-09-18";
  const nowStart = 540;
  const nowEnd = 720;
  const activeRoster = getActiveMembers();

  container.innerHTML = activeRoster.map((m) => {
    const block = getMemberStatusInRange(m.id, todayKey, nowStart, nowEnd);
    counts[block.type] = (counts[block.type] || 0) + 1;

    let detail = t("status_free");
    if (block.type === "work") {
      const task = APP_DATA.tasks.find((t) => t.id === block.taskId);
      detail = `${t("status_work")} · ${task ? task.title : 'Task'}`;
    } else if (block.type === "busy") {
      detail = `${t("status_busy")} · ${block.reason || 'Busy'}`;
    } else if (block.type === "nodata") {
      detail = t("status_nodata");
    }

    return `
      <div style="display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid #f5f5f5; font-size:0.9rem;" onclick="openRangeInspector('${todayKey}', ${nowStart}, ${nowEnd}, '${m.name} · Morning')">
        <span style="font-weight:600;">${m.name}</span>
        <span style="color:#666;">${detail}</span>
      </div>
    `;
  }).join("");

  const cAvail = document.getElementById("count-available");
  const cWork = document.getElementById("count-work");
  const cBusy = document.getElementById("count-busy");
  const cNo = document.getElementById("count-nodata");

  if (cAvail) cAvail.innerText = counts.available;
  if (cWork) cWork.innerText = counts.work;
  if (cBusy) cBusy.innerText = counts.busy;
  if (cNo) cNo.innerText = counts.nodata;
}

function renderOverviewMatrixSnapshot() {
  const counts = { q1: 0, q2: 0, q3: 0, q4: 0 };
  let urgent48 = 0;

  APP_DATA.tasks.forEach((t) => {
    counts[t.quadrant] = (counts[t.quadrant] || 0) + 1;
    if (t.urgent) urgent48++;
  });

  const mq1 = document.getElementById("matrix-count-q1");
  const mq2 = document.getElementById("matrix-count-q2");
  const mq3 = document.getElementById("matrix-count-q3");
  const mq4 = document.getElementById("matrix-count-q4");
  const insUrg = document.getElementById("insight-urgent-count");
  const insUnass = document.getElementById("insight-unassigned-count");

  if (mq1) mq1.innerText = counts.q1;
  if (mq2) mq2.innerText = counts.q2;
  if (mq3) mq3.innerText = counts.q3;
  if (mq4) mq4.innerText = counts.q4;
  if (insUrg) insUrg.innerHTML = t("insight_urgent", urgent48);

  const unassignedImp = APP_DATA.tasks.filter((t) => (t.quadrant === "q1" || t.quadrant === "q2") && !APP_DATA.blocks.some((b) => b.taskId === t.id)).length;
  if (insUnass) insUnass.innerHTML = t("insight_unassigned", unassignedImp);
}

function renderOverviewDeadlines() {
  const days = APP_DATA.overviewRange === "1w" ? APP_DATA.days.filter((d) => d.in1w) : APP_DATA.days;
  const dayKeys = days.map((d) => d.key);
  const container = document.getElementById("deadline-list");
  if (!container) return;

  const lbl = document.getElementById("deadline-range-label");
  if (lbl) lbl.innerText = APP_DATA.overviewRange === "1w" ? t("btn_1week") : t("btn_2weeks");

  const tasksInRange = APP_DATA.tasks.filter((t) => dayKeys.includes(t.deadlineDate)).sort(sortTasksByDeadline);
  if (tasksInRange.length === 0) {
    container.innerHTML = `<div style="font-size:0.85rem; color:#888; padding:8px 0;">${t("empty_no_tasks")}</div>`;
    return;
  }

  container.innerHTML = tasksInRange.slice(0, 5).map((task) => {
    const owner = APP_DATA.members.find((m) => m.id === task.ownerId);
    return `
      <div style="display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid #f5f5f5; font-size:0.85rem; cursor:pointer;" onclick="openTaskInspector('${task.id}')">
        <div>
          <div style="font-weight:600;">${task.title}</div>
          <div style="color:#777; font-size:0.75rem;">${owner ? owner.name : "Unassigned"}</div>
        </div>
        <div style="text-align:right;">
          <div style="font-weight:500; color:${task.urgent ? '#c62828' : 'inherit'};">${formatTaskDeadline(task)}</div>
          <span style="font-size:0.7rem; background:#eee; padding:1px 6px; border-radius:4px;">${task.quadrant.toUpperCase()}</span>
        </div>
      </div>
    `;
  }).join("");
}

/* ==========================================================================
   VIEW 2: SCHEDULE
   ========================================================================== */
function renderScheduleView() {
  const container = document.getElementById("schedule-viewport-container");
  const caption = document.getElementById("sched-view-caption");
  if (!container || !caption) return;

  const isDetailed = APP_DATA.scheduleMode === "detailed";
  const rCtrl = document.getElementById("sched-range-control");
  const dCtrl = document.getElementById("sched-day-control");
  const pSel = document.getElementById("sched-person-select");

  if (rCtrl) rCtrl.style.display = isDetailed ? "none" : "flex";
  if (dCtrl) dCtrl.style.display = isDetailed ? "flex" : "none";
  if (pSel) pSel.style.display = APP_DATA.scheduleScope === "person" ? "inline-block" : "none";

  caption.innerText = `${t("scope_team")} / ${APP_DATA.scheduleMode}`;
  renderOverviewSchedule();
}

/* ==========================================================================
   VIEW 3: PRIORITY MATRIX
   ========================================================================== */
function renderEisenhowerMatrix() {
  const isTeam = APP_DATA.matrixFilterMode === "team";
  const tasks = (isTeam ? APP_DATA.tasks : APP_DATA.tasks.filter((t) => t.ownerId === APP_DATA.matrixSelectedMemberId)).sort(sortTasksByDeadline);
  const buckets = { q1: [], q2: [], q3: [], q4: [] };
  tasks.forEach((t) => { if (buckets[t.quadrant]) buckets[t.quadrant].push(t); });

  ["q1", "q2", "q3", "q4"].forEach((code) => {
    const el = document.getElementById(`eq-list-${code}`);
    if (!el) return;
    const items = buckets[code];
    el.innerHTML = items.length === 0 ? `<div style="font-size:0.8rem; color:#888;">${t("empty_no_tasks")}</div>` : items.map((task) => `
      <div style="background:#fff; padding:8px; border-radius:6px; margin-top:6px; box-shadow:0 1px 2px rgba(0,0,0,0.05); cursor:pointer;" onclick="openTaskInspector('${task.id}')">
        <div style="font-weight:600; font-size:0.85rem;">${task.title}</div>
        <div style="font-size:0.75rem; color:#666;">Due: ${formatTaskDeadline(task)}</div>
      </div>
    `).join("");
  });
}

/* ==========================================================================
   VIEW 4: ME PAGE
   ========================================================================== */
function renderMePage() {
  const currentMember = APP_DATA.members.find((m) => m.id === APP_DATA.currentUserId) || getActiveMembers()[0];
  if (!currentMember) return;
  const nameEl = document.getElementById("me-heading-name");
  if (nameEl) nameEl.innerText = `${currentMember.name}`;

  const weekDays = APP_DATA.days.filter((d) => d.in1w);
  const schedContainer = document.getElementById("me-schedule-display");

  if (schedContainer) {
    schedContainer.innerHTML = weekDays.map((day) => {
      const dayBlocks = APP_DATA.blocks.filter((b) => b.memberId === currentMember.id && b.dateKey === day.key);
      return `
        <div style="display:flex; justify-content:space-between; align-items:center; padding:8px 0; border-bottom:1px solid #f0f0f0;">
          <span style="font-weight:600; font-size:0.85rem;">${day.short}</span>
          <div>
            ${dayBlocks.length === 0 ? `
              <button onclick="openBlockInputModal(${currentMember.id}, '${day.key}', '09:00', '12:00')" style="font-size:0.75rem; padding:4px 8px; border:1px dashed #ccc; background:none; cursor:pointer;">+ เพิ่ม</button>
            ` : dayBlocks.map((b) => `
              <span style="font-size:0.75rem; background:#eee; padding:3px 6px; border-radius:4px; margin-left:4px;">${b.start}–${b.end}</span>
            `).join("")}
          </div>
        </div>
      `;
    }).join("");
  }
}

/* ==========================================================================
   MODAL / INSPECTOR HELPERS
   ========================================================================== */
function openRangeInspector(dateKey, startMin, endMin, title) {
  const q = calculateExactQuorum(dateKey, startMin, endMin);
  const drawer = document.getElementById("side-drawer");
  document.getElementById("drawer-meta").innerText = "INSPECTOR";
  document.getElementById("drawer-title").innerText = title;
  document.getElementById("drawer-body").innerHTML = `
    <h3 style="color:green;">ว่าง ${q.available} / ${q.total} คน</h3>
    <div style="margin-top:12px;">
      <b>ผู้ที่ว่าง:</b>
      <div>${q.availableMembers.map(m => m.name).join(", ") || "-"}</div>
    </div>
  `;
  document.getElementById("overlay").style.display = "block";
  drawer.style.right = "0";
}

function openTaskInspector(taskId) {
  const task = APP_DATA.tasks.find((t) => t.id === taskId);
  if (!task) return;
  const drawer = document.getElementById("side-drawer");
  document.getElementById("drawer-meta").innerText = "TASK";
  document.getElementById("drawer-title").innerText = task.title;
  document.getElementById("drawer-body").innerHTML = `
    <p>Deadline: ${formatTaskDeadline(task)}</p>
    <p>สถานะ: ${task.status}</p>
    <p>Quadrant: ${task.quadrant.toUpperCase()}</p>
  `;
  document.getElementById("overlay").style.display = "block";
  drawer.style.right = "0";
}

function openBlockInputModal(memberId, dateKey, start, end) {
  document.getElementById("input-block-member-id").value = memberId;
  const dateSelect = document.getElementById("input-block-date");
  dateSelect.innerHTML = APP_DATA.days.map((d) => `<option value="${d.key}">${d.dateStr}</option>`).join("");
  dateSelect.value = dateKey;
  document.getElementById("input-block-start").value = start;
  document.getElementById("input-block-end").value = end;
  document.getElementById("overlay").style.display = "block";
  document.getElementById("block-input-modal").style.display = "block";
}

function closeAllOverlays() {
  const overlay = document.getElementById("overlay");
  if (overlay) overlay.style.display = "none";
  document.querySelectorAll(".modal").forEach((m) => m.style.display = "none");
  const drawer = document.getElementById("side-drawer");
  if (drawer) drawer.style.right = "-400px";
}

function setupGlobalControls() {
  const overlay = document.getElementById("overlay");
  if (overlay) overlay.addEventListener("click", closeAllOverlays);
  document.querySelectorAll(".btn-close, #close-block-modal, #close-add-task, #close-find-modal, #close-drawer, #close-team-settings").forEach((btn) => {
    btn.addEventListener("click", closeAllOverlays);
  });
}

function initPersonPickers() {
  const activeRoster = getActiveMembers();
  const switcher = document.getElementById("me-user-switcher");
  if (switcher) {
    switcher.innerHTML = activeRoster.map((m) => `<option value="${m.id}">${m.name}</option>`).join("");
    switcher.addEventListener("change", (e) => {
      APP_DATA.currentUserId = parseInt(e.target.value);
      renderMePage();
    });
  }
}
