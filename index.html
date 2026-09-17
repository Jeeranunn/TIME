<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TeamSync</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- แถบนำทางด้านบน -->
  <header class="top-nav" style="display: flex; justify-content: space-between; align-items: center; padding: 12px 24px; background: #fff; border-bottom: 1px solid #eee; position: sticky; top: 0; z-index: 100;">
    <div style="display: flex; align-items: center; gap: 20px;">
      <h2 style="margin: 0; font-size: 1.25rem;">TeamSync</h2>
      <nav style="display: flex; gap: 8px;">
        <button class="nav-btn active" data-view="overview" data-i18n="nav_overview">ภาพรวม</button>
        <button class="nav-btn" data-view="schedule" data-i18n="nav_schedule">ตารางเวลา</button>
        <button class="nav-btn" data-view="matrix" data-i18n="nav_matrix">แมทริกซ์</button>
        <button class="nav-btn" data-view="me" data-i18n="nav_me">ของฉัน</button>
      </nav>
    </div>

    <!-- ส่วนปุ่มเข้าสู่ระบบ / ข้อมูลโปรไฟล์ -->
    <div id="auth-container" style="display: flex; align-items: center; gap: 12px;">
      <div style="display: flex; gap: 4px; margin-right: 8px;">
        <button id="lang-th" class="lang-btn active">ไทย</button>
        <button id="lang-en" class="lang-btn">English</button>
      </div>

      <button id="btn-login" onclick="handleGoogleLogin()" style="padding: 7px 16px; border-radius: 20px; border: 1px solid #ccc; background: #fff; cursor: pointer; font-weight: 600; display: flex; align-items: center; gap: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
        🔑 เข้าสู่ระบบด้วย Google
      </button>

      <div id="user-info" style="display: none; align-items: center; gap: 8px; background: #f5f5f5; padding: 4px 12px; border-radius: 20px;">
        <img id="user-avatar" src="" alt="Profile" style="width: 28px; height: 28px; border-radius: 50%; object-fit: cover;">
        <span id="user-name" style="font-size: 13px; font-weight: 600;"></span>
        <button id="btn-logout" onclick="handleGoogleLogout()" style="padding: 3px 8px; border-radius: 6px; border: 1px solid #ddd; background: #fff; cursor: pointer; font-size: 11px; margin-left: 4px;">ออก</button>
      </div>

      <button id="btn-open-team-settings" style="background: none; border: none; cursor: pointer; font-size: 1.1rem;" title="ตั้งค่าทีม">⚙️</button>
    </div>
  </header>

  <!-- หน้า 1: OVERVIEW -->
  <main id="view-overview" class="page-view active" style="padding: 24px;">
    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 24px;">
      <div>
        <h1 style="margin: 0 0 6px 0;" data-i18n="ov_title">ภาพรวมทีม</h1>
        <p id="ov-team-subtitle" style="margin: 0; color: #666;"></p>
      </div>
      <div style="display: flex; gap: 10px;">
        <div class="pill-group" style="display: flex; background: #eee; padding: 2px; border-radius: 8px;">
          <button id="btn-ov-1w" class="pill-btn" data-i18n="btn_1week">1 สัปดาห์</button>
          <button id="btn-ov-2w" class="pill-btn active" data-i18n="btn_2weeks">2 สัปดาห์</button>
        </div>
        <button id="open-find-time" class="btn btn-dark" data-i18n="btn_find_time" style="background: #111; color: #fff; border: none; padding: 8px 16px; border-radius: 8px; cursor: pointer;">🕒 ค้นหาเวลาว่าง</button>
      </div>
    </div>

    <!-- แนะนำ 3 อันดับ -->
    <section style="margin-bottom: 30px;">
      <h3 data-i18n="best_shared_title" style="margin-bottom: 4px;">ช่วงเวลาที่ว่างพร้อมกันมากที่สุด</h3>
      <p id="best-shared-caption" style="margin: 0 0 16px 0; color: #777; font-size: 0.9rem;"></p>
      <div id="shared-time-list" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px;"></div>
    </section>

    <!-- ตารางความพร้อมทีม -->
    <section style="margin-bottom: 30px;">
      <h3 data-i18n="team_sched_ov_title" style="margin-bottom: 4px;">ภาพรวมตารางเวลาทีม</h3>
      <p data-i18n="team_sched_ov_desc" style="margin: 0 0 16px 0; color: #777; font-size: 0.9rem;">สแกนแนวนอนดูรายคน หรือแนวตั้งดูความพร้อมของทั้งทีม</p>
      <div style="overflow-x: auto; background: #fff; border: 1px solid #eee; border-radius: 8px;">
        <table id="team-schedule-table" style="width: 100%; border-collapse: collapse;"></table>
      </div>
    </section>

    <!-- สถานะสด และ Matrix สรุป -->
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
      <section style="background: #fff; padding: 20px; border-radius: 8px; border: 1px solid #eee;">
        <h3 data-i18n="team_now_title" style="margin-top: 0;">สถานะทีมตอนนี้</h3>
        <div style="display: flex; gap: 12px; font-size: 0.85rem; margin-bottom: 12px;">
          <span>ว่าง: <b id="count-available">0</b></span>
          <span>ทำงาน: <b id="count-work">0</b></span>
          <span>ติดธุระ: <b id="count-busy">0</b></span>
          <span>ไม่มีข้อมูล: <b id="count-nodata">0</b></span>
        </div>
        <div id="team-now-list"></div>
      </section>

      <section style="background: #fff; padding: 20px; border-radius: 8px; border: 1px solid #eee;">
        <h3 data-i18n="pri_snapshot_title" style="margin-top: 0;">ภาพรวมความสำคัญงาน</h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 16px;">
          <div style="background: #ffebee; padding: 10px; border-radius: 6px;">Q1 สำคัญ+เร่งด่วน: <b id="matrix-count-q1">0</b></div>
          <div style="background: #e8f5e9; padding: 10px; border-radius: 6px;">Q2 สำคัญ+ไม่เร่งด่วน: <b id="matrix-count-q2">0</b></div>
          <div style="background: #fff8e1; padding: 10px; border-radius: 6px;">Q3 ไม่สำคัญ+เร่งด่วน: <b id="matrix-count-q3">0</b></div>
          <div style="background: #f5f5f5; padding: 10px; border-radius: 6px;">Q4 ทั่วไป: <b id="matrix-count-q4">0</b></div>
        </div>
        <div id="insight-urgent-count" style="font-size: 0.9rem; margin-bottom: 6px;"></div>
        <div id="insight-unassigned-count" style="font-size: 0.9rem;"></div>
        <hr style="margin: 16px 0; border: none; border-top: 1px solid #eee;">
        <h4 data-i18n="upcoming_deadlines_title" style="margin: 0 0 10px 0;">เดดไลน์ที่ใกล้ถึง (<span id="deadline-range-label"></span>)</h4>
        <div id="deadline-list"></div>
      </section>
    </div>
  </main>

  <!-- หน้า 2: SCHEDULE -->
  <main id="view-schedule" class="page-view" style="display: none; padding: 24px;">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
      <h1 data-i18n="sched_page_title" style="margin: 0;">ตารางการทำงาน</h1>
      <div style="display: flex; gap: 8px;">
        <div class="pill-group" style="display: flex; background: #eee; padding: 2px; border-radius: 8px;">
          <button id="btn-sched-scope-team" class="pill-btn active" data-i18n="scope_team">ทีม</button>
          <button id="btn-sched-scope-person" class="pill-btn" data-i18n="scope_person">รายบุคคล</button>
        </div>
        <select id="sched-person-select" style="display: none; padding: 6px 10px; border-radius: 6px; border: 1px solid #ccc;"></select>
        <div class="pill-group" style="display: flex; background: #eee; padding: 2px; border-radius: 8px;">
          <button id="btn-sched-mode-overview" class="pill-btn active" data-i18n="mode_overview">ภาพรวม</button>
          <button id="btn-sched-mode-detailed" class="pill-btn" data-i18n="mode_detailed">ละเอียด</button>
        </div>
        <div id="sched-range-control" class="pill-group" style="display: flex; background: #eee; padding: 2px; border-radius: 8px;">
          <button id="btn-sched-1w" class="pill-btn" data-i18n="btn_1week">1 สัปดาห์</button>
          <button id="btn-sched-2w" class="pill-btn active" data-i18n="btn_2weeks">2 สัปดาห์</button>
        </div>
        <div id="sched-day-control" style="display: none; gap: 4px;">
          <button id="btn-sched-prev-day" class="pill-btn">◀</button>
          <select id="sched-single-day-select" style="padding: 6px 10px; border-radius: 6px; border: 1px solid #ccc;"></select>
          <button id="btn-sched-next-day" class="pill-btn">▶</button>
        </div>
      </div>
    </div>
    <div id="sched-view-caption" style="color: #666; margin-bottom: 14px; font-size: 0.9rem;"></div>
    <div id="schedule-viewport-container"></div>
  </main>

  <!-- หน้า 3: MATRIX -->
  <main id="view-matrix" class="page-view" style="display: none; padding: 24px;">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
      <div>
        <h1 data-i18n="matrix_page_title" style="margin: 0 0 4px 0;">แมทริกซ์จัดลำดับความสำคัญ</h1>
        <p data-i18n="matrix_page_desc" style="margin: 0; color: #666; font-size: 0.9rem;"></p>
      </div>
      <div style="display: flex; gap: 8px;">
        <div class="pill-group" style="display: flex; background: #eee; padding: 2px; border-radius: 8px;">
          <button id="mat-btn-team" class="pill-btn active" data-i18n="scope_team">ทีม</button>
          <button id="mat-btn-indiv" class="pill-btn" data-i18n="scope_person">รายบุคคล</button>
        </div>
        <select id="mat-person-select" style="display: none; padding: 6px 10px; border-radius: 6px; border: 1px solid #ccc;"></select>
      </div>
    </div>
    <div style="display: flex; gap: 16px; margin-bottom: 16px; font-size: 0.9rem;">
      <span>Q1: <b id="mat-sum-q1">0</b></span>
      <span>Q2: <b id="mat-sum-q2">0</b></span>
      <span>Q3: <b id="mat-sum-q3">0</b></span>
      <span>Q4: <b id="mat-sum-q4">0</b></span>
    </div>
    <div id="mat-factual-insights" style="margin-bottom: 20px;"></div>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
      <div style="background: #ffebee; padding: 16px; border-radius: 8px;">
        <div style="display: flex; justify-content: space-between;">
          <h4 style="margin: 0 0 10px 0;">Q1: สำคัญ + เร่งด่วน</h4>
          <span id="count-badge-q1" style="background: #c62828; color: #fff; padding: 2px 8px; border-radius: 12px; font-size: 0.75rem;">0</span>
        </div>
        <div id="eq-list-q1"></div>
      </div>
      <div style="background: #e8f5e9; padding: 16px; border-radius: 8px;">
        <div style="display: flex; justify-content: space-between;">
          <h4 style="margin: 0 0 10px 0;">Q2: สำคัญ + ไม่เร่งด่วน</h4>
          <span id="count-badge-q2" style="background: #2e7d32; color: #fff; padding: 2px 8px; border-radius: 12px; font-size: 0.75rem;">0</span>
        </div>
        <div id="eq-list-q2"></div>
      </div>
      <div style="background: #fff8e1; padding: 16px; border-radius: 8px;">
        <div style="display: flex; justify-content: space-between;">
          <h4 style="margin: 0 0 10px 0;">Q3: ไม่สำคัญ + เร่งด่วน</h4>
          <span id="count-badge-q3" style="background: #f57f17; color: #fff; padding: 2px 8px; border-radius: 12px; font-size: 0.75rem;">0</span>
        </div>
        <div id="eq-list-q3"></div>
      </div>
      <div style="background: #f5f5f5; padding: 16px; border-radius: 8px;">
        <div style="display: flex; justify-content: space-between;">
          <h4 style="margin: 0 0 10px 0;">Q4: ไม่สำคัญ + ไม่เร่งด่วน</h4>
          <span id="count-badge-q4" style="background: #757575; color: #fff; padding: 2px 8px; border-radius: 12px; font-size: 0.75rem;">0</span>
        </div>
        <div id="eq-list-q4"></div>
      </div>
    </div>
  </main>

  <!-- หน้า 4: ME PAGE -->
  <main id="view-me" class="page-view" style="display: none; padding: 24px;">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
      <div>
        <h1 style="margin: 0 0 4px 0;"><span data-i18n="nav_me">ของฉัน</span>: <span id="me-heading-name">เอ</span></h1>
        <p data-i18n="me_subtitle" style="margin: 0; color: #666; font-size: 0.9rem;"></p>
      </div>
      <div style="display: flex; gap: 8px; align-items: center;">
        <label style="font-size: 0.9rem;" data-i18n="acting_as">ใช้งานในชื่อ:</label>
        <select id="me-user-switcher" style="padding: 6px 10px; border-radius: 6px; border: 1px solid #ccc;"></select>
      </div>
    </div>
    <div style="display: flex; gap: 10px; margin-bottom: 20px;">
      <button id="me-quick-add-block" class="btn" style="padding: 8px 14px; background: #111; color: #fff; border: none; border-radius: 6px; cursor: pointer;" data-i18n="btn_add_block">+ ลงเวลา</button>
      <button id="me-quick-add-task" class="btn" style="padding: 8px 14px; background: #eee; border: none; border-radius: 6px; cursor: pointer;" data-i18n="btn_add_task">+ งาน</button>
      <button id="btn-copy-prev-week" class="btn" style="padding: 8px 14px; background: #eee; border: none; border-radius: 6px; cursor: pointer;" data-i18n="btn_copy_week">คัดลอกสัปดาห์ก่อนหน้า</button>
    </div>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
      <section style="background: #fff; padding: 20px; border-radius: 8px; border: 1px solid #eee;">
        <h3 data-i18n="my_schedule_title" style="margin-top: 0;">ตารางเวลาของฉัน</h3>
        <div id="me-schedule-display"></div>
      </section>
      <section style="background: #fff; padding: 20px; border-radius: 8px; border: 1px solid #eee;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
          <h3 data-i18n="my_tasks_title" style="margin: 0;">งานของฉัน</h3>
          <span id="me-task-count-badge" style="background: #eee; padding: 2px 8px; border-radius: 12px; font-size: 0.8rem;"></span>
        </div>
        <div style="display: flex; gap: 8px; margin-bottom: 16px; font-size: 0.85rem;">
          <span>Q1: <b id="me-count-q1">0</b></span>
          <span>Q2: <b id="me-count-q2">0</b></span>
          <span>Q3: <b id="me-count-q3">0</b></span>
          <span>Q4: <b id="me-count-q4">0</b></span>
        </div>
        <div id="me-tasks-list"></div>
      </section>
    </div>
  </main>

  <!-- Modals & Drawers -->
  <div id="overlay" style="display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.4); z-index: 900;"></div>

  <!-- Modal: ลงเวลา (Block) -->
  <div id="block-input-modal" class="modal" style="display: none; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: #fff; padding: 24px; border-radius: 8px; width: 360px; z-index: 1000; box-shadow: 0 4px 20px rgba(0,0,0,0.15);">
    <h3 id="block-modal-heading" style="margin-top: 0;">ลงเวลา</h3>
    <form id="form-schedule-block">
      <input type="hidden" id="input-block-id">
      <input type="hidden" id="input-block-member-id">
      <div style="margin-bottom: 10px;">
        <label data-i18n="label_date">วันที่</label>
        <select id="input-block-date" style="width: 100%; padding: 6px; margin-top: 4px;"></select>
      </div>
      <div style="display: flex; gap: 8px; margin-bottom: 10px;">
        <div style="flex: 1;">
          <label data-i18n="label_start_time">เวลาเริ่ม</label>
          <input type="time" id="input-block-start" style="width: 100%; padding: 6px; margin-top: 4px;" required>
        </div>
        <div style="flex: 1;">
          <label data-i18n="label_end_time">เวลาสิ้นสุด</label>
          <input type="time" id="input-block-end" style="width: 100%; padding: 6px; margin-top: 4px;" required>
        </div>
      </div>
      <div style="margin-bottom: 10px;">
        <label data-i18n="label_status">สถานะ</label>
        <div id="block-type-selector" style="display: flex; gap: 6px; margin-top: 4px;">
          <button type="button" class="btn-type-pill active" data-type="available" style="flex: 1; padding: 6px;" data-i18n="status_available">ว่าง</button>
          <button type="button" class="btn-type-pill" data-type="work" style="flex: 1; padding: 6px;" data-i18n="status_work">ทำงาน</button>
          <button type="button" class="btn-type-pill" data-type="busy" style="flex: 1; padding: 6px;" data-i18n="status_busy">ติดธุระ</button>
        </div>
      </div>
      <div id="block-work-section" style="display: none; margin-bottom: 10px;">
        <label data-i18n="label_linked_task">ผูกกับงาน</label>
        <select id="input-block-task-id" style="width: 100%; padding: 6px; margin-top: 4px;"></select>
        <button type="button" id="btn-create-task-inline" style="background: none; border: none; color: blue; cursor: pointer; font-size: 0.8rem; margin-top: 4px;" data-i18n="btn_create_task_inline">+ สร้างงานใหม่</button>
      </div>
      <div id="block-busy-section" style="display: none; margin-bottom: 10px;">
        <label data-i18n="label_short_reason">ระบุเหตุผลสั้น ๆ</label>
        <input type="text" id="input-block-reason" style="width: 100%; padding: 6px; margin-top: 4px;">
      </div>
      <div style="display: flex; justify-content: space-between; margin-top: 20px;">
        <button type="button" id="btn-delete-block" style="display: none; color: red; background: none; border: none; cursor: pointer;" data-i18n="btn_clear_block">ลบ</button>
        <div style="display: flex; gap: 8px; margin-left: auto;">
          <button type="button" id="close-block-modal" class="btn">ยกเลิก</button>
          <button type="submit" class="btn btn-primary" style="background: #111; color: #fff; border: none; padding: 6px 14px; border-radius: 4px;" data-i18n="btn_save_block">บันทึก</button>
        </div>
      </div>
    </form>
  </div>

  <!-- Modal: สร้างงาน (Task) -->
  <div id="add-task-modal" class="modal" style="display: none; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: #fff; padding: 24px; border-radius: 8px; width: 360px; z-index: 1000; box-shadow: 0 4px 20px rgba(0,0,0,0.15);">
    <h3 data-i18n="new_task_title" style="margin-top: 0;">สร้างงานใหม่</h3>
    <form id="form-add-task">
      <div style="margin-bottom: 10px;">
        <label data-i18n="label_task_title">ชื่องาน</label>
        <input type="text" id="input-task-title" style="width: 100%; padding: 6px; margin-top: 4px;" required>
      </div>
      <div style="margin-bottom: 10px;">
        <label data-i18n="label_assignee">ผู้รับผิดชอบ</label>
        <select id="input-task-owner" style="width: 100%; padding: 6px; margin-top: 4px;"></select>
      </div>
      <div style="margin-bottom: 10px;">
        <label data-i18n="label_deadline_date">วันที่ส่ง (Deadline)</label>
        <select id="input-task-deadline-date" style="width: 100%; padding: 6px; margin-top: 4px;"></select>
        <button type="button" id="btn-toggle-deadline-time" style="background: none; border: none; color: blue; cursor: pointer; font-size: 0.8rem; margin-top: 4px;" data-i18n="btn_add_time">+ เพิ่มเวลา</button>
        <div id="deadline-time-container" style="display: none; margin-top: 6px;">
          <input type="time" id="input-task-deadline-time" style="width: 100%; padding: 6px;">
        </div>
      </div>
      <div style="margin-bottom: 10px;">
        <label data-i18n="label_is_important">งานนี้สำคัญหรือไม่?</label>
        <div id="group-is-important" class="pill-group" style="display: flex; gap: 6px; margin-top: 4px;">
          <button type="button" class="pill active" data-val="true" style="flex: 1; padding: 6px;" data-i18n="choice_yes">ใช่</button>
          <button type="button" class="pill" data-val="false" style="flex: 1; padding: 6px;" data-i18n="choice_no">ไม่ใช่</button>
        </div>
      </div>
      <div style="margin-bottom: 16px;">
        <label data-i18n="label_is_urgent">งานนี้เร่งด่วนหรือไม่?</label>
        <div id="group-is-urgent" class="pill-group" style="display: flex; gap: 6px; margin-top: 4px;">
          <button type="button" class="pill active" data-val="true" style="flex: 1; padding: 6px;" data-i18n="choice_yes">ใช่</button>
          <button type="button" class="pill" data-val="false" style="flex: 1; padding: 6px;" data-i18n="choice_no">ไม่ใช่</button>
        </div>
      </div>
      <div style="display: flex; justify-content: flex-end; gap: 8px;">
        <button type="button" id="close-add-task" class="btn">ยกเลิก</button>
        <button type="submit" class="btn btn-primary" style="background: #111; color: #fff; border: none; padding: 6px 14px; border-radius: 4px;" data-i18n="btn_save_task">บันทึกงาน</button>
      </div>
    </form>
  </div>

  <!-- Modal: ค้นหาเวลาว่าง (Find a Time) -->
  <div id="find-time-modal" class="modal" style="display: none; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: #fff; padding: 24px; border-radius: 8px; width: 400px; max-height: 80vh; overflow-y: auto; z-index: 1000; box-shadow: 0 4px 20px rgba(0,0,0,0.15);">
    <h3 data-i18n="find_time_modal_title" style="margin-top: 0;">ค้นหาเวลาว่างพร้อมกัน</h3>
    <p data-i18n="find_time_modal_desc" style="font-size: 0.85rem; color: #666;"></p>
    <div style="margin-bottom: 12px;">
      <label data-i18n="label_duration">ระยะเวลาที่ต้องการ</label>
      <div id="duration-selector" class="pill-group" style="display: flex; gap: 6px; margin-top: 4px;">
        <button type="button" class="pill" data-minutes="60">1 ชม.</button>
        <button type="button" class="pill active" data-minutes="120">2 ชม.</button>
        <button type="button" class="pill" data-minutes="180">3 ชม.</button>
      </div>
    </div>
    <div style="margin-bottom: 12px;">
      <label data-i18n="label_people">ผู้เข้าร่วม</label>
      <div id="people-scope-selector" class="pill-group" style="display: flex; gap: 6px; margin-top: 4px; margin-bottom: 8px;">
        <button type="button" class="pill active" data-scope="everyone" id="pill-everyone-label" data-i18n="scope_everyone">ทุกคน</button>
        <button type="button" class="pill" data-scope="select" data-i18n="scope_select_members">เลือกบางคน</button>
      </div>
      <div id="person-picker" style="display: none; grid-template-columns: 1fr 1fr; gap: 6px; max-height: 120px; overflow-y: auto; background: #fafafa; padding: 8px; border-radius: 6px;"></div>
    </div>
    <div style="margin-bottom: 16px;">
      <label data-i18n="label_min_people">จำนวนคนที่ต้องว่างอย่างน้อย</label>
      <select id="min-people-select" style="width: 100%; padding: 6px; margin-top: 4px;"></select>
    </div>
    <button id="btn-run-find" class="btn btn-primary" style="width: 100%; padding: 8px; background: #111; color: #fff; border: none; border-radius: 6px; cursor: pointer;" data-i18n="btn_find_matches">ค้นหาช่วงเวลา</button>
    <div id="find-results" style="display: none; margin-top: 16px;">
      <h4 data-i18n="results_heading" style="margin: 0 0 8px 0;">ผลการค้นหา</h4>
      <div id="result-items" style="display: flex; flex-direction: column; gap: 8px;"></div>
    </div>
    <div style="text-align: right; margin-top: 16px;">
      <button id="close-find-modal" class="btn">ปิด</button>
    </div>
  </div>

  <!-- Modal: ตั้งค่าทีม (Team Settings) -->
  <div id="team-settings-modal" class="modal" style="display: none; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: #fff; padding: 24px; border-radius: 8px; width: 440px; z-index: 1000; box-shadow: 0 4px 20px rgba(0,0,0,0.15);">
    <h3 data-i18n="team_settings_title" style="margin-top: 0;">ตั้งค่าทีมและสมาชิก</h3>
    <form id="form-add-member" style="display: flex; gap: 8px; margin-bottom: 16px;">
      <input type="text" id="input-new-member-name" placeholder="ชื่อสมาชิกใหม่..." style="flex: 1; padding: 6px 10px;" required>
      <button type="submit" class="btn" style="background: #111; color: #fff; border: none; padding: 6px 12px; border-radius: 4px;" data-i18n="btn_add_member">+ เพิ่ม</button>
    </form>
    <div style="max-height: 240px; overflow-y: auto; border: 1px solid #eee; border-radius: 6px; margin-bottom: 16px;">
      <table style="width: 100%; border-collapse: collapse;">
        <tbody id="team-settings-member-list"></tbody>
      </table>
    </div>
    <div style="text-align: right;">
      <button id="close-team-settings" class="btn">ปิด</button>
    </div>
  </div>

  <!-- Side Drawer -->
  <aside id="side-drawer" class="drawer" style="position: fixed; top: 0; right: -400px; width: 360px; height: 100vh; background: #fff; box-shadow: -2px 0 10px rgba(0,0,0,0.1); z-index: 1000; padding: 24px; box-sizing: border-box; transition: right 0.3s ease; overflow-y: auto;">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
      <span id="drawer-meta" style="font-size: 0.75rem; color: #888; letter-spacing: 1px;"></span>
      <button id="close-drawer" style="background: none; border: none; font-size: 1.2rem; cursor: pointer;">✕</button>
    </div>
    <h2 id="drawer-title" style="margin: 0 0 16px 0; font-size: 1.2rem;"></h2>
    <div id="drawer-body"></div>
  </aside>

  <!-- 1. โหลด Firebase SDK -->
  <script src="https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/10.8.0/firebase-auth-compat.js"></script>

  <!-- 2. โหลด JavaScript การทำงานหลัก -->
  <script src="script.js"></script>
</body>
</html>
