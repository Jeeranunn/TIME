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

/* ==========================================================================
   FIREBASE / FIRESTORE CONNECTION
   ==========================================================================
   1. Create a project at https://console.firebase.google.com
   2. Build a Firestore database (Native mode) — Build > Firestore Database > Create database
   3. Set the security rules (see firestore.rules alongside this file)
   4. Project settings (gear icon) > General > Your apps > Web app > copy the config below
   5. (First time only) open seed.html once in a browser to create the demo team members
   ========================================================================== */
const firebaseConfig = {
  apiKey: "AIzaSyCq4rm_4AZ8lTmKVCUIM93dxnyHJm0rSxw",
  authDomain: "ff-time-d8ab5.firebaseapp.com",
  projectId: "ff-time-d8ab5",
  storageBucket: "ff-time-d8ab5.firebasestorage.app",
  messagingSenderId: "457507578708",
  appId: "1:457507578708:web:64d713054ded83fb715ec1"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const membersCol = db.collection("members");
const tasksCol = db.collection("tasks");
const blocksCol = db.collection("blocks");
const blockNotesCol = db.collection("block_notes");

/* ---- Load everything from Firestore into APP_DATA ---- */
async function loadAllData() {
  try {
    const [membersSnap, tasksSnap, blocksSnap, notesSnap] = await Promise.all([
    membersCol.orderBy("id").get(),
    tasksCol.get(),
    blocksCol.get(),
    blockNotesCol.orderBy("createdAt").get()]
    );

    APP_DATA.members = membersSnap.docs.map((d) => d.data());
    APP_DATA.tasks = tasksSnap.docs.map((d) => d.data());
    APP_DATA.blocks = blocksSnap.docs.map((d) => d.data());

    APP_DATA.blockNotes = {};
    notesSnap.docs.forEach((d) => {
      const n = d.data();
      if (!APP_DATA.blockNotes[n.blockId]) APP_DATA.blockNotes[n.blockId] = [];
      APP_DATA.blockNotes[n.blockId].push(`${n.author || "User"}: ${n.text}`);
    });

    if (!APP_DATA.members.find((m) => m.id === APP_DATA.currentUserId)) {
      APP_DATA.currentUserId = APP_DATA.members.length > 0 ? APP_DATA.members[0].id : null;
    }
    APP_DATA.scheduleSelectedPersonId = APP_DATA.currentUserId;
    APP_DATA.matrixSelectedMemberId = APP_DATA.currentUserId;
  } catch (err) {
    console.error("Failed to load data from Firestore:", err);
    alert("โหลดข้อมูลจากฐานข้อมูลไม่สำเร็จ กรุณาตรวจสอบ firebaseConfig และ Firestore security rules แล้วดู console สำหรับรายละเอียด");
  }
}

let currentLang = "th";
function t(key, ...args) {
  const dict = I18N[currentLang] || I18N.th;
  const val = dict[key];
  if (typeof val === "function") return val(...args);
  return val || key;
}

/* ==========================================================================
   CENTRAL DATA ARCHITECTURE (DYNAMIC TEAM & SHARED DATA)
   ========================================================================== */
const APP_DATA = {
  activeView: "overview",
  overviewRange: "2w",

  scheduleScope: "team", // 'team' | 'person'
  scheduleMode: "overview", // 'overview' | 'detailed'
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
  { key: "2026-10-01", dateStr: "Wed 01 Oct", short: "01 Oct", in1w: false }],


  periods: [
  { key: "morning", label: "Morning", time: "09:00–12:00", startMin: 540, endMin: 720 },
  { key: "afternoon", label: "Afternoon", time: "13:00–17:00", startMin: 780, endMin: 1020 },
  { key: "evening", label: "Evening", time: "18:00–21:00", startMin: 1080, endMin: 1260 }],


  // PEOPLE Collection: Dynamic Team with Active flag
  // Loaded from Supabase at startup by loadAllData() — see below.
  members: [],

  tasks: [],

  blocks: [],

  blockNotes: {}
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

// Strictly evaluates active members only
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
   APP INITIALIZATION & TRANSLATION ENGINE
   ========================================================================== */
document.addEventListener("DOMContentLoaded", async () => {
  await loadAllData();
  setupNavigation();
  setupGlobalControls();
  initPersonPickers();
  updateStaticTranslations();
  refreshAllActiveViews();
});

function setLanguage(lang) {
  currentLang = lang;
  document.getElementById("lang-th").classList.toggle("active", lang === "th");
  document.getElementById("lang-en").classList.toggle("active", lang === "en");
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
      document.querySelectorAll(".page-view").forEach((v) => v.classList.remove("active"));
      document.getElementById(`view-${APP_DATA.activeView}`).classList.add("active");
      document.querySelectorAll("[data-view]").forEach((b) => b.classList.toggle("active", b.getAttribute("data-view") === APP_DATA.activeView));
      refreshAllActiveViews();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  document.getElementById("lang-th").addEventListener("click", () => setLanguage("th"));
  document.getElementById("lang-en").addEventListener("click", () => setLanguage("en"));
}

function refreshAllActiveViews() {
  const activeCount = getActiveMembers().length;
  document.getElementById("ov-team-subtitle").innerText = t("ov_subtitle", activeCount);
  document.getElementById("pill-everyone-label").innerText = t("scope_everyone", activeCount);

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

  const container = document.getElementById("shared-time-list");
  container.innerHTML = top3.map((item, idx) => `
    <div class="slot-card" onclick="openRangeInspector('${item.day.key}', ${item.period.startMin}, ${item.period.endMin}, '${item.day.dateStr} · ${item.period.label} (${item.period.time})')">
      <div class="slot-rank">${t("top_3_recs")} #${idx + 1}</div>
      <div class="slot-date">${item.day.dateStr}</div>
      <div class="slot-time">${item.period.label} (${item.period.time})</div>
      <div class="slot-capacity">
        <span class="capacity-metric">${item.quorum.available} / ${item.quorum.total} ${t("status_available")}</span>
        <span class="slot-arrow">${t("inspect_arrow")}</span>
      </div>
    </div>
  `).join("");

  document.getElementById("best-shared-caption").innerText =
  t("best_shared_caption", APP_DATA.overviewRange === '1w' ? '7' : '14');
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
      <tr>
        <th class="sticky-col sticky-col-header" rowspan="2">${t("th_member_name")}</th>
        ${days.map((d) => `<th class="th-date-group" colspan="3">${d.short}</th>`).join("")}
      </tr>
      <tr>
        ${columns.map((c) => `
          <th class="th-seg ${c.isHigh ? 'col-subtle-tint' : ''}" title="${c.period.label}: ${c.available}/${c.total} ${t('status_free')}">
            ${c.period.label[0]}
          </th>
        `).join("")}
      </tr>
    </thead>
  `;

  let quorumRow = `
    <tr class="tr-quorum">
      <td class="sticky-col" style="font-weight:700; color:var(--text-secondary); background:#F8F8F7;">${t("status_free")}</td>
      ${columns.map((c) => `
        <td class="td-quorum-cell ${c.isHigh ? 'col-highlight-high' : ''}">
          ${c.available}/${c.total}
        </td>
      `).join("")}
    </tr>
  `;

  let body = activeRoster.map((m) => {
    let cells = columns.map((c) => {
      const st = getMemberStatusInRange(m.id, c.day.key, c.period.startMin, c.period.endMin);
      let label = st.type === "available" ? t("status_free") : st.type === "work" ? t("status_work") : st.type === "busy" ? t("status_busy") : "—";
      return `
        <td class="sched-grid-cell ${c.isHigh ? 'col-subtle-tint' : ''}">
          <div class="compact-tile block-${st.type}" onclick="openRangeInspector('${c.day.key}', ${c.period.startMin}, ${c.period.endMin}, '${c.day.dateStr} · ${c.period.label}')">
            ${label}
          </div>
        </td>
      `;
    }).join("");

    return `<tr><td class="sticky-col">${m.name}</td>${cells}</tr>`;
  }).join("");

  table.innerHTML = `${thead}<tbody>${quorumRow}${body}</tbody>`;
}

function renderTeamNowSummary() {
  const container = document.getElementById("team-now-list");
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
      <div class="team-row" onclick="openRangeInspector('${todayKey}', ${nowStart}, ${nowEnd}, '${m.name} · Morning')">
        <div class="team-user-info">
          <span class="dot dot-${block.type}"></span>
          <span class="user-name">${m.name}</span>
        </div>
        <div class="user-activity">
          <span class="status-tag tag-${block.type}">${t("status_" + block.type)}</span>
          <span>${detail}</span>
        </div>
      </div>
    `;
  }).join("");

  document.getElementById("count-available").innerText = counts.available;
  document.getElementById("count-work").innerText = counts.work;
  document.getElementById("count-busy").innerText = counts.busy;
  document.getElementById("count-nodata").innerText = counts.nodata;
}

function renderOverviewMatrixSnapshot() {
  const counts = { q1: 0, q2: 0, q3: 0, q4: 0 };
  let urgent48 = 0;

  APP_DATA.tasks.forEach((t) => {
    counts[t.quadrant] = (counts[t.quadrant] || 0) + 1;
    if (t.urgent) urgent48++;
  });

  document.getElementById("matrix-count-q1").innerText = counts.q1;
  document.getElementById("matrix-count-q2").innerText = counts.q2;
  document.getElementById("matrix-count-q3").innerText = counts.q3;
  document.getElementById("matrix-count-q4").innerText = counts.q4;
  document.getElementById("insight-urgent-count").innerHTML = t("insight_urgent", urgent48);

  const unassignedImp = APP_DATA.tasks.filter((t) => (t.quadrant === "q1" || t.quadrant === "q2") && !APP_DATA.blocks.some((b) => b.taskId === t.id)).length;
  document.getElementById("insight-unassigned-count").innerHTML = t("insight_unassigned", unassignedImp);
}

function renderOverviewDeadlines() {
  const days = APP_DATA.overviewRange === "1w" ? APP_DATA.days.filter((d) => d.in1w) : APP_DATA.days;
  const dayKeys = days.map((d) => d.key);
  const container = document.getElementById("deadline-list");

  document.getElementById("deadline-range-label").innerText =
  APP_DATA.overviewRange === "1w" ? t("btn_1week") : t("btn_2weeks");

  const tasksInRange = APP_DATA.tasks.filter((t) => dayKeys.includes(t.deadlineDate)).sort(sortTasksByDeadline);
  if (tasksInRange.length === 0) {
    container.innerHTML = `<div style="font-size:0.85rem; color:var(--text-muted); padding:8px 0;">${t("empty_no_tasks")}</div>`;
    return;
  }

  container.innerHTML = tasksInRange.slice(0, 5).map((task) => {
    const owner = APP_DATA.members.find((m) => m.id === task.ownerId);
    const qInfo = APP_DATA.quadrants[task.quadrant];
    return `
      <div class="deadline-item" onclick="openTaskInspector('${task.id}')">
        <div>
          <div class="task-title">${task.title}</div>
          <div class="task-meta">${t("label_assignee")}: ${owner ? owner.name : "Unassigned"}</div>
        </div>
        <div class="deadline-right">
          <span class="deadline-due ${task.urgent ? 'due-urgent' : ''}">${formatTaskDeadline(task)}</span>
          <span class="priority-pill ${qInfo.css}">${t(qInfo.labelKey)}</span>
        </div>
      </div>
    `;
  }).join("");
}

/* ==========================================================================
   VIEW 2: SCHEDULE (TEAM/PERSON & OVERVIEW/DETAILED)
   ========================================================================== */
function renderScheduleView() {
  const container = document.getElementById("schedule-viewport-container");
  const caption = document.getElementById("sched-view-caption");

  const isDetailed = APP_DATA.scheduleMode === "detailed";
  document.getElementById("sched-range-control").style.display = isDetailed ? "none" : "flex";
  document.getElementById("sched-day-control").style.display = isDetailed ? "flex" : "none";
  document.getElementById("sched-person-select").style.display = APP_DATA.scheduleScope === "person" ? "inline-block" : "none";

  if (APP_DATA.scheduleScope === "team" && APP_DATA.scheduleMode === "overview") {
    caption.innerText = `${t("scope_team")} / ${t("mode_overview")} — 1-2 ${t("btn_2weeks")}`;
    renderScheduleTeamOverview(container);
  } else if (APP_DATA.scheduleScope === "team" && APP_DATA.scheduleMode === "detailed") {
    caption.innerText = `${t("scope_team")} / ${t("mode_detailed")} — 08:00–21:00 (${t("block_modal_desc")})`;
    renderScheduleTeamDetailed(container);
  } else if (APP_DATA.scheduleScope === "person" && APP_DATA.scheduleMode === "overview") {
    const p = APP_DATA.members.find((m) => m.id === APP_DATA.scheduleSelectedPersonId);
    caption.innerText = `${t("scope_person")} / ${t("mode_overview")} — ${p ? p.name : ''}`;
    renderSchedulePersonOverview(container);
  } else {
    const p = APP_DATA.members.find((m) => m.id === APP_DATA.scheduleSelectedPersonId);
    caption.innerText = `${t("scope_person")} / ${t("mode_detailed")} — ${p ? p.name : ''}`;
    renderSchedulePersonDetailed(container);
  }
}

function renderScheduleTeamOverview(container) {
  const days = APP_DATA.scheduleRange === "1w" ? APP_DATA.days.filter((d) => d.in1w) : APP_DATA.days;
  const periods = APP_DATA.periods;
  const activeRoster = getActiveMembers();
  const columns = [];

  days.forEach((day) => {
    periods.forEach((p) => {
      const q = calculateExactQuorum(day.key, p.startMin, p.endMin);
      const isHigh = q.total > 0 && q.available / q.total >= 0.8;
      columns.push({ day, period: p, available: q.available, total: q.total, isHigh });
    });
  });

  let tableHtml = `
    <div class="matrix-grid-scroll-wrapper">
      <table class="compact-sched-table">
        <thead>
          <tr>
            <th class="sticky-col sticky-col-header" rowspan="2">${t("th_member_name")}</th>
            ${days.map((d) => `<th class="th-date-group" colspan="3">${d.short}</th>`).join("")}
          </tr>
          <tr>
            ${columns.map((c) => `<th class="th-seg ${c.isHigh ? 'col-subtle-tint' : ''}">${c.period.label[0]}</th>`).join("")}
          </tr>
        </thead>
        <tbody>
          <tr class="tr-quorum">
            <td class="sticky-col" style="font-weight:700; background:#F8F8F7;">${t("status_free")}</td>
            ${columns.map((c) => `
              <td class="td-quorum-cell ${c.isHigh ? 'col-highlight-high' : ''}" onclick="openRangeInspector('${c.day.key}', ${c.period.startMin}, ${c.period.endMin}, '${c.day.dateStr} · ${c.period.label}')">
                ${c.available}/${c.total}
              </td>
            `).join("")}
          </tr>
          ${activeRoster.map((m) => `
            <tr>
              <td class="sticky-col">${m.name}</td>
              ${columns.map((c) => {
    const st = getMemberStatusInRange(m.id, c.day.key, c.period.startMin, c.period.endMin);
    let label = st.type === "available" ? t("status_free") : st.type === "work" ? t("status_work") : st.type === "busy" ? t("status_busy") : "—";
    return `
                  <td class="sched-grid-cell ${c.isHigh ? 'col-subtle-tint' : ''}">
                    <div class="compact-tile block-${st.type}" onclick="openRangeInspector('${c.day.key}', ${c.period.startMin}, ${c.period.endMin}, '${c.day.dateStr} · ${c.period.label}')">
                      ${label}
                    </div>
                  </td>
                `;
  }).join("")}
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
  container.innerHTML = tableHtml;
}

function renderScheduleTeamDetailed(container) {
  const dayKey = APP_DATA.scheduleDetailedDay;
  const dayObj = APP_DATA.days.find((d) => d.key === dayKey) || APP_DATA.days[0];
  const axisStartMin = 480;
  const axisEndMin = 1260;
  const totalMinutes = axisEndMin - axisStartMin;
  const activeRoster = getActiveMembers();

  const stripSegments = [];
  for (let min = axisStartMin; min < axisEndMin; min += 60) {
    const q = calculateExactQuorum(dayKey, min, min + 60);
    stripSegments.push({
      startMin: min,
      endMin: min + 60,
      label: `${formatMinutesToTime(min)}`,
      available: q.available,
      total: q.total
    });
  }

  const hours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  const ticksHtml = hours.map((h) => `
    <div class="timeline-hour-tick">
      ${String(h).padStart(2, '0')}:00
      <span class="timeline-half-tick"></span>
    </div>
  `).join("");

  const gridBackgroundHtml = hours.map(() => `
    <div class="grid-line-hour"><span class="grid-line-half"></span></div>
  `).join("");

  const memberRowsHtml = activeRoster.map((m) => {
    const memberBlocks = APP_DATA.blocks.filter((b) => b.memberId === m.id && b.dateKey === dayKey);

    const blocksHtml = memberBlocks.map((b) => {
      const bStart = Math.max(axisStartMin, parseTimeToMinutes(b.start));
      const bEnd = Math.min(axisEndMin, parseTimeToMinutes(b.end));
      if (bEnd <= bStart) return "";

      const leftPercent = (bStart - axisStartMin) / totalMinutes * 100;
      const widthPercent = (bEnd - bStart) / totalMinutes * 100;

      let label = `${b.start}–${b.end}`;
      if (b.type === "work") {
        const task = APP_DATA.tasks.find((t) => t.id === b.taskId);
        label = `${t("status_work")}: ${task ? task.title : 'Task'} (${b.start}–${b.end})`;
      } else if (b.type === "busy") {
        label = `${t("status_busy")}: ${b.reason || 'Committed'} (${b.start}–${b.end})`;
      } else {
        label = `${t("status_free")} (${b.start}–${b.end})`;
      }

      return `
        <div class="timeline-block block-${b.type}" 
             style="left:${leftPercent}%; width:${widthPercent}%;"
             title="${m.name}: ${label}"
             onclick="openBlockDetailInspector('${b.id}')">
          ${label}
        </div>
      `;
    }).join("");

    return `
      <div class="timeline-row">
        <div class="timeline-member-label">${m.name}</div>
        <div class="timeline-track" onclick="handleTimelineTrackClick(event, ${m.id}, '${dayKey}')">
          <div class="timeline-grid-lines">${gridBackgroundHtml}</div>
          ${blocksHtml}
        </div>
      </div>
    `;
  }).join("");

  container.innerHTML = `
    <div class="detailed-timeline-card">
      <div class="shared-availability-strip">
        <div style="font-size:0.85rem; font-weight:700; margin-right:16px; white-space:nowrap;">
          ${t("mutual_availability")} (${dayObj.short}):
        </div>
        <div class="quorum-gradient-track">
          ${stripSegments.map((seg) => {
    const ratio = seg.total > 0 ? seg.available / seg.total : 0;
    const bg = ratio >= 0.8 ? '#A7D7B5' : ratio >= 0.5 ? '#CFE3D5' : '#ECECE8';
    const color = ratio >= 0.8 ? '#1E5833' : '#4E4E4A';
    return `
              <div class="quorum-hour-segment" 
                   style="background:${bg}; color:${color};"
                   title="${seg.label}: ${seg.available}/${seg.total} ${t('status_free')}"
                   onclick="openRangeInspector('${dayKey}', ${seg.startMin}, ${seg.endMin}, '${dayObj.short} · ${seg.label}–${formatMinutesToTime(seg.endMin)}')">
                ${seg.available}
              </div>
            `;
  }).join("")}
        </div>
      </div>

      <div class="timeline-outer">
        <div class="timeline-axis-header">${ticksHtml}</div>
        <div class="timeline-rows-container">${memberRowsHtml}</div>
      </div>
    </div>
  `;
}

function renderSchedulePersonOverview(container) {
  const member = APP_DATA.members.find((m) => m.id === APP_DATA.scheduleSelectedPersonId) || getActiveMembers()[0];
  const days = APP_DATA.scheduleRange === "1w" ? APP_DATA.days.filter((d) => d.in1w) : APP_DATA.days;

  container.innerHTML = `
    <div class="col-card">
      <div class="section-header-inline">
        <h3 class="section-title">${member.name}</h3>
        <button class="btn btn-primary" onclick="openBlockInputModal(${member.id}, '${days[0].key}', '09:00', '11:00')">${t("btn_add_block")}</button>
      </div>
      <div class="my-sched-grid">
        ${days.map((d) => `
          <div class="my-day-row">
            <div class="my-day-label">${d.short}</div>
            <div class="my-segments-wrap">
              ${APP_DATA.periods.map((p) => {
    const st = getMemberStatusInRange(member.id, d.key, p.startMin, p.endMin);
    let label = st.type === "available" ? t("status_free") : st.type === "work" ? t("status_work") : st.type === "busy" ? t("status_busy") : "—";
    return `
                  <button class="my-segment-btn block-${st.type}" onclick="openBlockInputModal(${member.id}, '${d.key}', '${formatMinutesToTime(p.startMin)}', '${formatMinutesToTime(p.endMin)}')">
                    ${p.label}: ${label}
                  </button>
                `;
  }).join("")}
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

function renderSchedulePersonDetailed(container) {
  const member = APP_DATA.members.find((m) => m.id === APP_DATA.scheduleSelectedPersonId) || getActiveMembers()[0];
  const weekDays = APP_DATA.days.filter((d) => d.in1w);

  container.innerHTML = `
    <div class="col-card">
      <div class="section-header-inline">
        <h3 class="section-title">${member.name}</h3>
        <button class="btn btn-primary" onclick="openBlockInputModal(${member.id}, '${weekDays[0].key}', '09:00', '11:00')">${t("btn_add_block")}</button>
      </div>
      <div style="display:flex; flex-direction:column; gap:12px;">
        ${weekDays.map((d) => {
    const dayBlocks = APP_DATA.blocks.filter((b) => b.memberId === member.id && b.dateKey === d.key);
    return `
            <div style="padding:12px; background:#FAF9F7; border:1px solid var(--border-subtle); border-radius:var(--radius-sm);">
              <div style="font-weight:700; font-size:0.9rem; margin-bottom:8px;">${d.dateStr}</div>
              ${dayBlocks.length === 0 ? `<div style="font-size:0.8rem; color:var(--text-muted);">${t("status_free")}</div>` : `
                <div style="display:flex; gap:8px; flex-wrap:wrap;">
                  ${dayBlocks.map((b) => `
                    <div class="timeline-block block-${b.type}" style="position:static; padding:6px 12px; height:auto;" onclick="openBlockDetailInspector('${b.id}')">
                      <strong>${b.start}–${b.end}</strong>: ${t("status_" + b.type)} ${b.reason ? `(${b.reason})` : ''}
                    </div>
                  `).join("")}
                </div>
              `}
            </div>
          `;
  }).join("")}
      </div>
    </div>
  `;
}

window.handleTimelineTrackClick = function (event, memberId, dateKey) {
  if (event.target.classList.contains("timeline-block")) return;
  const rect = event.currentTarget.getBoundingClientRect();
  const clickX = event.clientX - rect.left;
  const clickRatio = Math.max(0, Math.min(1, clickX / rect.width));
  const clickedMinutes = Math.floor(480 + clickRatio * 780);

  const roundedStart = Math.floor(clickedMinutes / 30) * 30;
  const roundedEnd = roundedStart + 60;

  openBlockInputModal(memberId, dateKey, formatMinutesToTime(roundedStart), formatMinutesToTime(roundedEnd));
};

/* ==========================================================================
   VIEW 3: PRIORITY MATRIX
   ========================================================================== */
function renderEisenhowerMatrix() {
  const isTeam = APP_DATA.matrixFilterMode === "team";
  const tasks = (isTeam ?
  APP_DATA.tasks :
  APP_DATA.tasks.filter((t) => t.ownerId === APP_DATA.matrixSelectedMemberId)).
  sort(sortTasksByDeadline);

  const buckets = { q1: [], q2: [], q3: [], q4: [] };
  tasks.forEach((t) => {if (buckets[t.quadrant]) buckets[t.quadrant].push(t);});

  document.getElementById("mat-sum-q1").innerText = buckets.q1.length;
  document.getElementById("mat-sum-q2").innerText = buckets.q2.length;
  document.getElementById("mat-sum-q3").innerText = buckets.q3.length;
  document.getElementById("mat-sum-q4").innerText = buckets.q4.length;

  document.getElementById("count-badge-q1").innerText = buckets.q1.length;
  document.getElementById("count-badge-q2").innerText = buckets.q2.length;
  document.getElementById("count-badge-q3").innerText = buckets.q3.length;
  document.getElementById("count-badge-q4").innerText = buckets.q4.length;

  const urgentCount = tasks.filter((t) => t.urgent).length;
  const importantNoBlock = tasks.filter((t) => (t.quadrant === "q1" || t.quadrant === "q2") && !APP_DATA.blocks.some((b) => b.taskId === t.id)).length;
  document.getElementById("mat-factual-insights").innerHTML = `
    <div class="insight-row"><span class="insight-bullet bullet-warn"></span><span>${t("insight_urgent", urgentCount)}</span></div>
    ${importantNoBlock > 0 ? `<div class="insight-row"><span class="insight-bullet bullet-info"></span><span>${t("insight_unassigned", importantNoBlock)}</span></div>` : ''}
  `;

  ["q1", "q2", "q3", "q4"].forEach((qCode) => {
    const listEl = document.getElementById(`eq-list-${qCode}`);
    const items = buckets[qCode];
    if (items.length === 0) {
      listEl.innerHTML = `<div class="eq-empty-state">${t("empty_no_tasks")}</div>`;
      return;
    }
    listEl.innerHTML = items.map((task) => {
      const owner = APP_DATA.members.find((m) => m.id === task.ownerId);
      return `
        <div class="eq-task-card" onclick="openTaskInspector('${task.id}')">
          <div class="eq-card-title">${task.title}</div>
          <div class="eq-card-meta">
            <span class="eq-owner">${owner ? owner.name : 'Unassigned'}</span>
            <span>·</span>
            <span>Due ${formatTaskDeadline(task)}</span>
          </div>
        </div>
      `;
    }).join("");
  });
}

/* ==========================================================================
   VIEW 4: ME PAGE
   ========================================================================== */
function renderMePage() {
  const currentMember = APP_DATA.members.find((m) => m.id === APP_DATA.currentUserId) || getActiveMembers()[0];
  if (!currentMember) return;
  document.getElementById("me-heading-name").innerText = `${currentMember.name}`;

  const weekDays = APP_DATA.days.filter((d) => d.in1w);
  const schedContainer = document.getElementById("me-schedule-display");

  schedContainer.innerHTML = weekDays.map((day) => {
    const dayBlocks = APP_DATA.blocks.filter((b) => b.memberId === currentMember.id && b.dateKey === day.key);
    return `
      <div class="my-day-row">
        <div class="my-day-label">${day.short}</div>
        <div class="my-segments-wrap">
          ${dayBlocks.length === 0 ? `
            <button class="btn-chip" onclick="openBlockInputModal(${currentMember.id}, '${day.key}', '09:00', '12:00')">${t("btn_add_block")}</button>
          ` : dayBlocks.map((b) => `
            <button class="my-segment-btn block-${b.type}" onclick="openBlockDetailInspector('${b.id}')">
              ${b.start}–${b.end}: ${t("status_" + b.type)}
            </button>
          `).join("")}
        </div>
      </div>
    `;
  }).join("");

  const myTasks = APP_DATA.tasks.filter((t) => t.ownerId === currentMember.id).sort(sortTasksByDeadline);
  document.getElementById("me-task-count-badge").innerText = `${myTasks.length} tasks`;
  document.getElementById("me-tasks-list").innerHTML = myTasks.length === 0 ? `<div style="font-size:0.85rem; color:var(--text-muted); padding:8px 0;">${t("empty_no_assigned")}</div>` : myTasks.map((task) => {
    const q = APP_DATA.quadrants[task.quadrant];
    return `
      <div class="deadline-item" onclick="openTaskInspector('${task.id}')">
        <div>
          <div class="task-title">${task.title}</div>
          <div class="task-meta">${t("th_status")}: ${task.status || 'In Progress'}</div>
        </div>
        <div class="deadline-right">
          <span class="deadline-due ${task.urgent ? 'due-urgent' : ''}">${formatTaskDeadline(task)}</span>
          <span class="priority-pill ${q.css}">${t(q.labelKey)}</span>
        </div>
      </div>
    `;
  }).join("");

  const counts = { q1: 0, q2: 0, q3: 0, q4: 0 };
  myTasks.forEach((t) => {counts[t.quadrant] = (counts[t.quadrant] || 0) + 1;});
  document.getElementById("me-count-q1").innerText = counts.q1;
  document.getElementById("me-count-q2").innerText = counts.q2;
  document.getElementById("me-count-q3").innerText = counts.q3;
  document.getElementById("me-count-q4").innerText = counts.q4;
}

/* ==========================================================================
   SCHEDULE BLOCK INPUT & EDIT
   ========================================================================== */
function openBlockInputModal(memberId, dateKey, start = "09:00", end = "11:00", existingBlockId = null) {
  const member = APP_DATA.members.find((m) => m.id === memberId);
  const existing = existingBlockId ? APP_DATA.blocks.find((b) => b.id === existingBlockId) : null;

  document.getElementById("input-block-id").value = existingBlockId || "";
  document.getElementById("input-block-member-id").value = memberId;
  document.getElementById("block-modal-heading").innerText = `${member ? member.name : ''}`;

  const dateSelect = document.getElementById("input-block-date");
  dateSelect.innerHTML = APP_DATA.days.map((d) => `<option value="${d.key}">${d.dateStr}</option>`).join("");
  dateSelect.value = existing ? existing.dateKey : dateKey;

  document.getElementById("input-block-start").value = existing ? existing.start : start;
  document.getElementById("input-block-end").value = existing ? existing.end : end;

  const taskSelect = document.getElementById("input-block-task-id");
  taskSelect.innerHTML = APP_DATA.tasks.map((t) => `<option value="${t.id}">${t.title} (${t.quadrant.toUpperCase()})</option>`).join("");
  if (existing && existing.taskId) taskSelect.value = existing.taskId;

  const currentType = existing ? existing.type : "available";
  setBlockTypeActive(currentType);

  document.getElementById("input-block-reason").value = existing && existing.reason || "";
  document.getElementById("btn-delete-block").style.display = existing ? "inline-block" : "none";

  openModal(document.getElementById("block-input-modal"));
}

function setBlockTypeActive(type) {
  document.querySelectorAll("#block-type-selector .btn-type-pill").forEach((p) => {
    p.classList.toggle("active", p.getAttribute("data-type") === type);
  });
  document.getElementById("block-work-section").style.display = type === "work" ? "block" : "none";
  document.getElementById("block-busy-section").style.display = type === "busy" ? "block" : "none";
}

window.adjustBlockDuration = function (minutesToAdd) {
  const startVal = document.getElementById("input-block-start").value;
  const startMin = parseTimeToMinutes(startVal);
  const newEndMin = Math.min(1439, startMin + minutesToAdd);
  document.getElementById("input-block-end").value = formatMinutesToTime(newEndMin);
};

/* ==========================================================================
   TEAM SETTINGS (ADD, RENAME, TOGGLE ACTIVE/INACTIVE)
   ========================================================================== */
function renderTeamSettingsList() {
  const tbody = document.getElementById("team-settings-member-list");
  tbody.innerHTML = APP_DATA.members.map((m) => `
    <tr style="border-bottom:1px solid var(--border-subtle);">
      <td style="padding:10px 12px; font-weight:600;">
        ${m.name} ${!m.active ? '<span style="font-size:0.75rem; color:var(--text-muted);">(' + t("status_inactive") + ')</span>' : ''}
      </td>
      <td style="padding:10px 12px;">
        <span class="status-tag ${m.active ? 'tag-available' : 'tag-nodata'}">
          ${m.active ? t("status_active") : t("status_inactive")}
        </span>
      </td>
      <td style="padding:10px 12px; text-align:right;">
        <button class="btn-text" onclick="renameMember(${m.id})" style="margin-right:8px;">${t("btn_edit_name")}</button>
        <button class="btn-text" onclick="toggleMemberActive(${m.id})">${t("btn_toggle_active")}</button>
      </td>
    </tr>
  `).join("");
}

window.renameMember = async function (memberId) {
  const member = APP_DATA.members.find((m) => m.id === memberId);
  if (!member) return;
  const newName = prompt(t("th_member_name"), member.name);
  if (newName && newName.trim()) {
    const trimmed = newName.trim();
    try {
      await membersCol.doc(String(memberId)).update({ name: trimmed });
    } catch (err) { alert("แก้ไขชื่อไม่สำเร็จ: " + err.message); return; }
    member.name = trimmed;
    renderTeamSettingsList();
    initPersonPickers();
    refreshAllActiveViews();
  }
};

window.toggleMemberActive = async function (memberId) {
  const member = APP_DATA.members.find((m) => m.id === memberId);
  if (!member) return;
  const newActive = !member.active;
  try {
    await membersCol.doc(String(memberId)).update({ active: newActive });
  } catch (err) { alert("เปลี่ยนสถานะไม่สำเร็จ: " + err.message); return; }
  member.active = newActive;
  renderTeamSettingsList();
  initPersonPickers();
  refreshAllActiveViews();
};

/* ==========================================================================
   DRAWER INSPECTOR
   ========================================================================== */
function openRangeInspector(dateKey, startMin, endMin, title) {
  const q = calculateExactQuorum(dateKey, startMin, endMin);
  const drawer = document.getElementById("side-drawer");

  document.getElementById("drawer-meta").innerText = t("drawer_meta");
  document.getElementById("drawer-title").innerText = title;

  document.getElementById("drawer-body").innerHTML = `
    <div style="margin-bottom: 20px;">
      <div style="font-size: 1.35rem; font-weight: 700; color:var(--status-avail-text);">
        ${q.available} / ${q.total} ${t("status_available")}
      </div>
      <div style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 4px;">
        ${q.conflicts.length} conflict(s)
      </div>
    </div>

    <h4 class="drawer-section-title">${t("status_busy")} (${q.conflicts.length})</h4>
    ${q.conflicts.length === 0 ? `<div style="font-size:0.82rem; color:var(--text-muted);">${t("choice_no")} conflicts.</div>` : q.conflicts.map((c) => {
    let badge = "";
    let taskDetail = "";
    if (c.task) {
      const qInfo = APP_DATA.quadrants[c.task.quadrant];
      badge = `<span class="priority-pill ${qInfo.css}" style="font-size:0.65rem;">${t(qInfo.labelKey)}</span>`;
      taskDetail = `<div style="font-size:0.75rem; color:var(--text-muted); margin-top:2px;">Deadline: ${formatTaskDeadline(c.task)}</div>`;
    } else if (c.type === "nodata") {
      badge = `<span class="status-tag tag-nodata">${t("status_nodata")}</span>`;
    }
    return `
        <div class="drawer-person-row unavailable">
          <div>
            <strong>${c.name}</strong>
            <div style="font-size:0.78rem; color:#8A3834; margin-top:2px;">${c.reason}</div>
            ${taskDetail}
          </div>
          <div>${badge}</div>
        </div>
      `;
  }).join("")}

    <h4 class="drawer-section-title">${t("status_available")} (${q.availableMembers.length})</h4>
    ${q.availableMembers.map((m) => `
      <div class="drawer-person-row">
        <div><strong>${m.name}</strong></div>
        <span class="status-tag tag-available">${t("status_available")}</span>
      </div>
    `).join("")}
  `;

  document.getElementById("overlay").classList.add("active");
  drawer.classList.add("active");
}

function openBlockDetailInspector(blockId) {
  const block = APP_DATA.blocks.find((b) => b.id === blockId);
  if (!block) return;

  const member = APP_DATA.members.find((m) => m.id === block.memberId);
  const day = APP_DATA.days.find((d) => d.key === block.dateKey);
  const drawer = document.getElementById("side-drawer");
  const notes = APP_DATA.blockNotes[block.id] || [];

  document.getElementById("drawer-meta").innerText = t("drawer_meta");
  document.getElementById("drawer-title").innerText = `${member ? member.name : ''} · ${day ? day.short : block.dateKey}`;

  let content = "";
  if (block.type === "work") {
    const task = APP_DATA.tasks.find((t) => t.id === block.taskId);
    const qInfo = task ? APP_DATA.quadrants[task.quadrant] : null;
    content = `
      <div class="drawer-task-box">
        <div style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase;">${t("status_work")}</div>
        <div style="font-weight:700; font-size:1.05rem; margin:2px 0 6px;">${task ? task.title : 'Unlinked Task'}</div>
        ${qInfo ? `<span class="priority-pill ${qInfo.css}">${t(qInfo.labelKey)}</span>` : ''}
        <div style="font-size:0.82rem; color:var(--text-secondary); margin-top:8px;">
          Deadline: <strong>${task ? formatTaskDeadline(task) : 'None'}</strong>
        </div>
      </div>
    `;
  } else if (block.type === "busy") {
    content = `
      <div class="drawer-task-box" style="border-left:3px solid #E57373;">
        <div style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase;">${t("status_busy")}</div>
        <div style="font-weight:600; font-size:0.95rem; margin-top:4px;">${block.reason || t("status_busy")}</div>
      </div>
    `;
  } else {
    content = `
      <div class="drawer-task-box" style="background:var(--status-avail-bg);">
        <div style="font-weight:600; font-size:0.9rem; color:var(--status-avail-text);">${t("status_available")}</div>
      </div>
    `;
  }

  document.getElementById("drawer-body").innerHTML = `
    <div style="margin-bottom:14px;">
      <div style="font-size:0.88rem; color:var(--text-secondary);">${day ? day.dateStr : block.dateKey} · <strong>${block.start}–${block.end}</strong></div>
      <div style="margin-top:6px; display:flex; gap:8px;">
        <span class="status-tag tag-${block.type}">${t("status_" + block.type)}</span>
        <button class="btn-text" onclick="closeAllOverlays(); openBlockInputModal(${block.memberId}, '${block.dateKey}', '${block.start}', '${block.end}', '${block.id}')">${t("btn_edit_name")} &rarr;</button>
      </div>
    </div>
    ${content}

    <h4 class="drawer-section-title">Notes / Observations</h4>
    <div id="drawer-notes-list">
      ${notes.length === 0 ? `<div style="font-size:0.8rem; color:var(--text-muted); margin-bottom:8px;">${t("empty_no_tasks")}</div>` : notes.map((n) => `<div class="note-item">${n}</div>`).join("")}
    </div>
    <div class="note-input-row">
      <input type="text" class="form-input" id="input-drawer-note" placeholder="Note..." style="font-size:0.82rem; padding:6px 10px;" />
      <button class="btn btn-secondary" style="padding:6px 12px; font-size:0.8rem;" onclick="submitBlockNote('${block.id}')">Add</button>
    </div>
  `;

  document.getElementById("overlay").classList.add("active");
  drawer.classList.add("active");
}

window.submitBlockNote = async function (blockId) {
  const input = document.getElementById("input-drawer-note");
  const val = input.value.trim();
  if (!val) return;
  const currentMember = APP_DATA.members.find((m) => m.id === APP_DATA.currentUserId);
  const author = currentMember ? currentMember.name : "User";

  try {
    await blockNotesCol.add({
      blockId,
      author,
      text: val,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
  } catch (err) { alert("บันทึกโน้ตไม่สำเร็จ: " + err.message); return; }

  if (!APP_DATA.blockNotes[blockId]) APP_DATA.blockNotes[blockId] = [];
  APP_DATA.blockNotes[blockId].push(`${author}: ${val}`);
  input.value = "";
  openBlockDetailInspector(blockId);
};

function openTaskInspector(taskId) {
  const task = APP_DATA.tasks.find((t) => t.id === taskId);
  if (!task) return;

  const owner = APP_DATA.members.find((m) => m.id === task.ownerId);
  const qInfo = APP_DATA.quadrants[task.quadrant];
  const linkedBlocks = APP_DATA.blocks.filter((b) => b.taskId === task.id);
  const drawer = document.getElementById("side-drawer");

  document.getElementById("drawer-meta").innerText = t("drawer_meta");
  document.getElementById("drawer-title").innerText = task.title;

  document.getElementById("drawer-body").innerHTML = `
    <div class="drawer-task-box" style="margin-bottom:16px;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px;">
        <span class="priority-pill ${qInfo.css}">${t(qInfo.labelKey)}</span>
        <span style="font-weight:600; font-size:0.85rem; color:${task.urgent ? '#C03530' : 'inherit'}">Due: ${formatTaskDeadline(task)}</span>
      </div>

      <div class="drawer-row-item">
        <span class="label">${t("label_assignee")}</span>
        <span class="value">${owner ? owner.name : "Unassigned"}</span>
      </div>

      <div class="drawer-row-item">
        <span class="label">${t("th_status")}</span>
        <span class="value">${task.status || "In Progress"}</span>
      </div>

      <div class="drawer-row-item">
        <span class="label">Scheduled Work Time</span>
        <span class="value" style="color:${linkedBlocks.length > 0 ? 'var(--text-primary)' : 'var(--text-muted)'};">
          ${linkedBlocks.length > 0 ? linkedBlocks.map((b) => `${b.dateKey} (${b.start}–${b.end})`).join(", ") : t("choice_no")}
        </span>
      </div>

      <div class="drawer-row-item" style="margin-bottom:0;">
        <span class="label">Note</span>
        <span class="value" style="font-size:0.85rem; font-weight:400; color:var(--text-secondary); margin-top:2px;">
          ${task.note || "-"}
        </span>
      </div>
    </div>

    <div style="background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:var(--radius-sm); padding:14px;">
      <span style="display:block; font-size:0.75rem; font-weight:600; color:var(--text-muted); text-transform:uppercase; margin-bottom:10px;">
        Change Quadrant
      </span>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
        <button class="btn btn-secondary ${task.quadrant === 'q1' ? 'btn-primary' : ''}" style="font-size:0.75rem; padding:6px 8px;" onclick="moveTaskQuadrant('${task.id}', 'q1')">Q1</button>
        <button class="btn btn-secondary ${task.quadrant === 'q2' ? 'btn-primary' : ''}" style="font-size:0.75rem; padding:6px 8px;" onclick="moveTaskQuadrant('${task.id}', 'q2')">Q2</button>
        <button class="btn btn-secondary ${task.quadrant === 'q3' ? 'btn-primary' : ''}" style="font-size:0.75rem; padding:6px 8px;" onclick="moveTaskQuadrant('${task.id}', 'q3')">Q3</button>
        <button class="btn btn-secondary ${task.quadrant === 'q4' ? 'btn-primary' : ''}" style="font-size:0.75rem; padding:6px 8px;" onclick="moveTaskQuadrant('${task.id}', 'q4')">Q4</button>
      </div>
    </div>
  `;

  document.getElementById("overlay").classList.add("active");
  drawer.classList.add("active");
}

window.moveTaskQuadrant = function (taskId, newQuadrant) {
  const task = APP_DATA.tasks.find((t) => t.id === taskId);
  if (!task) return;
  task.quadrant = newQuadrant;
  task.urgent = newQuadrant === "q1" || newQuadrant === "q3";
  refreshAllActiveViews();
  openTaskInspector(taskId);
};

/* ==========================================================================
   GLOBAL CONTROLS & EVENT BINDINGS
   ========================================================================== */
function setupGlobalControls() {
  const overlay = document.getElementById("overlay");
  const blockModal = document.getElementById("block-input-modal");
  const taskModal = document.getElementById("add-task-modal");
  const findModal = document.getElementById("find-time-modal");
  const teamSettingsModal = document.getElementById("team-settings-modal");

  // Team Settings Button
  document.getElementById("btn-open-team-settings").addEventListener("click", () => {
    renderTeamSettingsList();
    openModal(teamSettingsModal);
  });
  document.getElementById("close-team-settings").addEventListener("click", closeAllOverlays);

  // Add Member Form
  document.getElementById("form-add-member").addEventListener("submit", async (e) => {
    e.preventDefault();
    const input = document.getElementById("input-new-member-name");
    const name = input.value.trim();
    if (!name) return;

    const newId = APP_DATA.members.length > 0 ? Math.max(...APP_DATA.members.map((m) => m.id)) + 1 : 1;
    const newMember = { id: newId, name, active: true };
    try {
      await membersCol.doc(String(newId)).set(newMember);
    } catch (err) { alert("เพิ่มสมาชิกไม่สำเร็จ: " + err.message); return; }

    APP_DATA.members.push(newMember);
    input.value = "";
    renderTeamSettingsList();
    initPersonPickers();
    refreshAllActiveViews();
  });

  // Overview Range Controls
  document.getElementById("btn-ov-1w").addEventListener("click", () => {
    document.getElementById("btn-ov-1w").classList.add("active");
    document.getElementById("btn-ov-2w").classList.remove("active");
    APP_DATA.overviewRange = "1w";
    refreshAllActiveViews();
  });
  document.getElementById("btn-ov-2w").addEventListener("click", () => {
    document.getElementById("btn-ov-2w").classList.add("active");
    document.getElementById("btn-ov-1w").classList.remove("active");
    APP_DATA.overviewRange = "2w";
    refreshAllActiveViews();
  });

  // Schedule Scope
  document.getElementById("btn-sched-scope-team").addEventListener("click", () => {
    document.getElementById("btn-sched-scope-team").classList.add("active");
    document.getElementById("btn-sched-scope-person").classList.remove("active");
    APP_DATA.scheduleScope = "team";
    renderScheduleView();
  });
  document.getElementById("btn-sched-scope-person").addEventListener("click", () => {
    document.getElementById("btn-sched-scope-person").classList.add("active");
    document.getElementById("btn-sched-scope-team").classList.remove("active");
    APP_DATA.scheduleScope = "person";
    renderScheduleView();
  });

  // Schedule Mode
  document.getElementById("btn-sched-mode-overview").addEventListener("click", () => {
    document.getElementById("btn-sched-mode-overview").classList.add("active");
    document.getElementById("btn-sched-mode-detailed").classList.remove("active");
    APP_DATA.scheduleMode = "overview";
    renderScheduleView();
  });
  document.getElementById("btn-sched-mode-detailed").addEventListener("click", () => {
    document.getElementById("btn-sched-mode-detailed").classList.add("active");
    document.getElementById("btn-sched-mode-overview").classList.remove("active");
    APP_DATA.scheduleMode = "detailed";
    renderScheduleView();
  });

  // Schedule Range
  document.getElementById("btn-sched-1w").addEventListener("click", () => {
    document.getElementById("btn-sched-1w").classList.add("active");
    document.getElementById("btn-sched-2w").classList.remove("active");
    APP_DATA.scheduleRange = "1w";
    renderScheduleView();
  });
  document.getElementById("btn-sched-2w").addEventListener("click", () => {
    document.getElementById("btn-sched-2w").classList.add("active");
    document.getElementById("btn-sched-1w").classList.remove("active");
    APP_DATA.scheduleRange = "2w";
    renderScheduleView();
  });

  // Day Picker
  document.getElementById("btn-sched-prev-day").addEventListener("click", () => {
    const idx = APP_DATA.days.findIndex((d) => d.key === APP_DATA.scheduleDetailedDay);
    if (idx > 0) {
      APP_DATA.scheduleDetailedDay = APP_DATA.days[idx - 1].key;
      document.getElementById("sched-single-day-select").value = APP_DATA.scheduleDetailedDay;
      renderScheduleView();
    }
  });
  document.getElementById("btn-sched-next-day").addEventListener("click", () => {
    const idx = APP_DATA.days.findIndex((d) => d.key === APP_DATA.scheduleDetailedDay);
    if (idx < APP_DATA.days.length - 1) {
      APP_DATA.scheduleDetailedDay = APP_DATA.days[idx + 1].key;
      document.getElementById("sched-single-day-select").value = APP_DATA.scheduleDetailedDay;
      renderScheduleView();
    }
  });
  document.getElementById("sched-single-day-select").addEventListener("change", (e) => {
    APP_DATA.scheduleDetailedDay = e.target.value;
    renderScheduleView();
  });

  // Matrix View Switches
  document.getElementById("mat-btn-team").addEventListener("click", () => {
    document.getElementById("mat-btn-team").classList.add("active");
    document.getElementById("mat-btn-indiv").classList.remove("active");
    document.getElementById("mat-person-select").style.display = "none";
    APP_DATA.matrixFilterMode = "team";
    renderEisenhowerMatrix();
  });
  document.getElementById("mat-btn-indiv").addEventListener("click", () => {
    document.getElementById("mat-btn-indiv").classList.add("active");
    document.getElementById("mat-btn-team").classList.remove("active");
    document.getElementById("mat-person-select").style.display = "inline-block";
    APP_DATA.matrixFilterMode = "individual";
    renderEisenhowerMatrix();
  });

  // Me Page Triggers
  document.getElementById("me-quick-add-block").addEventListener("click", () => {
    openBlockInputModal(APP_DATA.currentUserId, "2026-09-18", "09:00", "11:00");
  });
  document.getElementById("me-quick-add-task").addEventListener("click", () => {
    document.getElementById("input-task-owner").value = APP_DATA.currentUserId;
    openModal(taskModal);
  });

  document.getElementById("btn-copy-prev-week").addEventListener("click", async () => {
    const memberId = APP_DATA.currentUserId;
    const week1Blocks = APP_DATA.blocks.filter((b) => b.memberId === memberId && APP_DATA.days.find((d) => d.key === b.dateKey)?.in1w);

    const newBlocks = [];
    week1Blocks.forEach((b) => {
      const dayIndex = APP_DATA.days.findIndex((d) => d.key === b.dateKey);
      if (dayIndex !== -1 && dayIndex + 7 < APP_DATA.days.length) {
        const nextWeekKey = APP_DATA.days[dayIndex + 7].key;
        newBlocks.push({
          id: `b_${Date.now()}_${Math.random().toString(36).slice(2)}`,
          memberId: b.memberId,
          dateKey: nextWeekKey,
          start: b.start,
          end: b.end,
          type: b.type,
          taskId: b.taskId || null,
          reason: b.reason || null
        });
      }
    });

    if (newBlocks.length > 0) {
      try {
        const batch = db.batch();
        newBlocks.forEach((b) => batch.set(blocksCol.doc(b.id), b));
        await batch.commit();
      } catch (err) { alert("คัดลอกไม่สำเร็จ: " + err.message); return; }
      APP_DATA.blocks.push(...newBlocks);
    }

    refreshAllActiveViews();
    alert("Copied week 1 blocks to week 2.");
  });

  // Save Schedule Block Form
  document.getElementById("form-schedule-block").addEventListener("submit", async (e) => {
    e.preventDefault();
    const existingId = document.getElementById("input-block-id").value;
    const memberId = parseInt(document.getElementById("input-block-member-id").value);
    const dateKey = document.getElementById("input-block-date").value;
    const start = document.getElementById("input-block-start").value;
    const end = document.getElementById("input-block-end").value;
    const activeType = document.querySelector("#block-type-selector .btn-type-pill.active").getAttribute("data-type");

    if (parseTimeToMinutes(end) <= parseTimeToMinutes(start)) {
      alert("End time must be after start time.");
      return;
    }

    const blockData = {
      memberId,
      dateKey,
      start,
      end,
      type: activeType,
      taskId: activeType === "work" ? document.getElementById("input-block-task-id").value : null,
      reason: activeType === "busy" ? document.getElementById("input-block-reason").value.trim() || t("status_busy") : null
    };

    const finalId = existingId || `b_${Date.now()}`;
    try {
      await blocksCol.doc(finalId).set({ id: finalId, ...blockData });
    } catch (err) { alert("บันทึกไม่สำเร็จ: " + err.message); return; }

    if (existingId) {
      const idx = APP_DATA.blocks.findIndex((b) => b.id === existingId);
      if (idx !== -1) APP_DATA.blocks[idx] = { id: existingId, ...blockData };
    } else {
      APP_DATA.blocks.push({ id: finalId, ...blockData });
    }

    closeAllOverlays();
    refreshAllActiveViews();
  });

  // Delete Block
  document.getElementById("btn-delete-block").addEventListener("click", async () => {
    const existingId = document.getElementById("input-block-id").value;
    if (existingId) {
      try {
        await blocksCol.doc(existingId).delete();
      } catch (err) { alert("ลบไม่สำเร็จ: " + err.message); return; }
      APP_DATA.blocks = APP_DATA.blocks.filter((b) => b.id !== existingId);
      closeAllOverlays();
      refreshAllActiveViews();
    }
  });

  // Inline Task Creation Trigger
  document.getElementById("btn-create-task-inline").addEventListener("click", () => {
    closeAllOverlays();
    setTimeout(() => openModal(taskModal), 120);
  });

  // Save Task Form
  document.getElementById("form-add-task").addEventListener("submit", async (e) => {
    e.preventDefault();
    const title = document.getElementById("input-task-title").value.trim();
    const ownerId = parseInt(document.getElementById("input-task-owner").value);
    const deadlineDate = document.getElementById("input-task-deadline-date").value;
    const timeVal = document.getElementById("input-task-deadline-time").value;
    const isImportant = document.querySelector("#group-is-important .pill.active").getAttribute("data-val") === "true";
    const isUrgent = document.querySelector("#group-is-urgent .pill.active").getAttribute("data-val") === "true";

    let quad = "q4";
    if (isImportant && isUrgent) quad = "q1";else
    if (isImportant && !isUrgent) quad = "q2";else
    if (!isImportant && isUrgent) quad = "q3";

    const newTask = {
      id: `task-${Date.now()}`,
      title,
      ownerId,
      deadlineDate,
      deadlineTime: timeVal || null,
      quadrant: quad,
      urgent: isUrgent,
      status: "In Progress",
      note: ""
    };

    try {
      await tasksCol.doc(newTask.id).set(newTask);
    } catch (err) { alert("บันทึกงานไม่สำเร็จ: " + err.message); return; }

    APP_DATA.tasks.unshift(newTask);

    closeAllOverlays();
    document.getElementById("form-add-task").reset();
    refreshAllActiveViews();
  });

  // Deadline Time Toggle
  document.getElementById("btn-toggle-deadline-time").addEventListener("click", () => {
    const box = document.getElementById("deadline-time-container");
    const isHidden = box.style.display === "none";
    box.style.display = isHidden ? "block" : "none";
    document.getElementById("btn-toggle-deadline-time").innerText = isHidden ? "- Remove time" : t("btn_add_time");
  });

  // Block Type Buttons
  document.querySelectorAll("#block-type-selector .btn-type-pill").forEach((p) => {
    p.addEventListener("click", function () {
      setBlockTypeActive(this.getAttribute("data-type"));
    });
  });

  // Find a Time Triggers
  document.getElementById("open-find-time").addEventListener("click", () => openModal(findModal));
  document.getElementById("btn-run-find").addEventListener("click", runFindCalculation);

  // Close Overlays
  document.querySelectorAll(".btn-close, #close-block-modal, #close-add-task, #close-find-modal, #close-drawer").forEach((btn) => {
    btn.addEventListener("click", closeAllOverlays);
  });
  overlay.addEventListener("click", closeAllOverlays);

  setupPillToggle("#group-is-important");
  setupPillToggle("#group-is-urgent");
  setupPillToggle("#duration-selector");
}

function setupPillToggle(selector) {
  document.querySelectorAll(`${selector} .pill`).forEach((p) => {
    p.addEventListener("click", function () {
      this.parentElement.querySelectorAll(".pill").forEach((el) => el.classList.remove("active"));
      this.classList.add("active");
    });
  });
}

function initPersonPickers() {
  const activeRoster = getActiveMembers();

  // Populate member dropdowns
  const userSelects = ["sched-person-select", "mat-person-select", "input-task-owner", "me-user-switcher"];
  userSelects.forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      const currentVal = el.value;
      el.innerHTML = activeRoster.map((m) => `<option value="${m.id}">${m.name}</option>`).join("");
      if (activeRoster.some((m) => String(m.id) === currentVal)) {
        el.value = currentVal;
      } else if (activeRoster.length > 0) {
        el.value = activeRoster[0].id;
      }
    }
  });

  document.getElementById("sched-single-day-select").innerHTML =
  APP_DATA.days.map((d) => `<option value="${d.key}">${d.dateStr}</option>`).join("");
  document.getElementById("input-task-deadline-date").innerHTML =
  APP_DATA.days.map((d) => `<option value="${d.key}">${d.dateStr}</option>`).join("");

  // Multi-person picker for Find a Time
  document.getElementById("person-picker").innerHTML = activeRoster.map((m) => `
    <label class="person-check-label">
      <input type="checkbox" value="${m.id}" checked class="person-checkbox">
      <span>${m.name}</span>
    </label>
  `).join("");

  document.querySelectorAll("#person-picker .person-checkbox").forEach((cb) => {
    cb.addEventListener("change", updateMinSelectOptions);
  });

  document.querySelectorAll("#people-scope-selector .pill").forEach((p) => {
    p.addEventListener("click", function () {
      this.parentElement.querySelectorAll(".pill").forEach((el) => el.classList.remove("active"));
      this.classList.add("active");
      const isSelect = this.getAttribute("data-scope") === "select";
      document.getElementById("person-picker").style.display = isSelect ? "grid" : "none";
      updateMinSelectOptions();
    });
  });

  document.getElementById("sched-person-select").addEventListener("change", (e) => {
    APP_DATA.scheduleSelectedPersonId = parseInt(e.target.value);
    renderScheduleView();
  });
  document.getElementById("mat-person-select").addEventListener("change", (e) => {
    APP_DATA.matrixSelectedMemberId = parseInt(e.target.value);
    renderEisenhowerMatrix();
  });
  document.getElementById("me-user-switcher").addEventListener("change", (e) => {
    APP_DATA.currentUserId = parseInt(e.target.value);
    renderMePage();
  });

  updateMinSelectOptions();
}

function updateMinSelectOptions() {
  const select = document.getElementById("min-people-select");
  if (!select) return;
  const isEveryone = document.querySelector("#people-scope-selector .pill.active")?.getAttribute("data-scope") === "everyone";
  const activeCount = getActiveMembers().length;
  const count = isEveryone ? activeCount : document.querySelectorAll(".person-checkbox:checked").length;

  select.innerHTML = "";
  if (count === 0) {
    select.innerHTML = `<option value="0">0</option>`;
    return;
  }
  for (let i = count; i >= Math.max(1, count - 3); i--) {
    const opt = document.createElement("option");
    opt.value = i;
    opt.innerText = `${i} / ${count}`;
    if (i === count || count >= 4 && i === count - 1) opt.selected = true;
    select.appendChild(opt);
  }
}

/* ==========================================================================
   DYNAMIC FIND A TIME (ACCURATE TO DURATION IN MINUTES)
   ========================================================================== */
function runFindCalculation() {
  const scope = document.querySelector("#people-scope-selector .pill.active").getAttribute("data-scope");
  const selectedIds = scope === "everyone" ?
  getActiveMembers().map((m) => m.id) :
  Array.from(document.querySelectorAll(".person-checkbox:checked")).map((el) => parseInt(el.value));

  const durationMin = parseInt(document.querySelector("#duration-selector .pill.active").getAttribute("data-minutes")) || 120;
  const minRequired = parseInt(document.getElementById("min-people-select").value) || 1;
  const days = APP_DATA.days;
  const resultsContainer = document.getElementById("find-results");
  const resultList = document.getElementById("result-items");

  resultsContainer.style.display = "block";
  const matches = [];

  days.forEach((day) => {
    const checkRanges = [
    { start: 540, end: 720 },
    { start: 780, end: 1020 },
    { start: 1080, end: 1260 }];


    checkRanges.forEach((windowRange) => {
      for (let s = windowRange.start; s + durationMin <= windowRange.end; s += 60) {
        const e = s + durationMin;
        const q = calculateExactQuorum(day.key, s, e, selectedIds);
        if (q.available >= minRequired) {
          matches.push({ day, startMin: s, endMin: e, q });
        }
      }
    });
  });

  if (matches.length === 0) {
    resultList.innerHTML = `<div style="font-size:0.85rem; color:var(--text-muted); padding:8px 0;">${t("empty_no_slots")}</div>`;
    return;
  }

  resultList.innerHTML = matches.map(({ day, startMin, endMin, q }) => `
    <div class="result-card">
      <div>
        <strong style="font-size:0.9rem;">${day.dateStr} · ${formatMinutesToTime(startMin)}–${formatMinutesToTime(endMin)}</strong>
        <div style="font-size:0.78rem; color:var(--text-muted); margin-top:2px;">
          ${q.available} / ${q.total} ${t("status_available")} (${q.conflicts.length} conflict(s))
        </div>
      </div>
      <button class="btn btn-secondary" style="padding:4px 8px; font-size:0.75rem;" 
              onclick="openRangeInspector('${day.key}', ${startMin}, ${endMin}, '${day.dateStr} · ${formatMinutesToTime(startMin)}–${formatMinutesToTime(endMin)}')">${t("inspect_arrow")}</button>
    </div>
  `).join("");
}

function openModal(modalEl) {
  document.getElementById("overlay").classList.add("active");
  modalEl.classList.add("active");
}

function closeAllOverlays() {
  document.getElementById("overlay").classList.remove("active");
  document.querySelectorAll(".modal, .drawer").forEach((el) => el.classList.remove("active"));
}