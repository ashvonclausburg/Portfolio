/* ── PASSWORD GATE ────────────────────────────────────
   Simple client-side password protection for case studies.
   Not cryptographically secure — just a good-faith gate
   to keep content from being fully public.

   Usage: add <script src="/src/password-gate.js"></script>
   to any page that should be protected.

   To change the password, update PASSWORD below.
──────────────────────────────────────────────────────── */

(function () {
  const PASSWORD = "lorem";
  const STORAGE_KEY = "portfolio_auth";

  // Already authenticated this session
  if (sessionStorage.getItem(STORAGE_KEY) === "true") return;

  // Hide page content immediately
  document.documentElement.style.overflow = "hidden";

  // Build gate UI
  const gate = document.createElement("div");
  gate.id = "password-gate";
  gate.innerHTML = `
    <div class="gate-card">
      <p class="gate-label">Confidential Work</p>
      <h2 class="gate-title">Enter the password to continue</h2>
      <form class="gate-form">
        <input type="password" class="gate-input" placeholder="Password" autocomplete="off" autofocus />
        <button type="submit" class="gate-btn">View case study</button>
      </form>
      <p class="gate-error" hidden>Incorrect password. Please try again.</p>
      <a href="/" class="gate-back">&larr; Back to portfolio</a>
    </div>
  `;

  const style = document.createElement("style");
  style.textContent = `
    #password-gate {
      position: fixed;
      inset: 0;
      z-index: 10000;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #fff;
      font-family: 'Inter', sans-serif;
    }
    .gate-card {
      max-width: 400px;
      width: 100%;
      padding: 0 24px;
      text-align: center;
    }
    .gate-label {
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: #999;
      margin: 0 0 16px;
    }
    .gate-title {
      font-size: 22px;
      font-weight: 600;
      color: #111;
      margin: 0 0 28px;
      line-height: 1.3;
    }
    .gate-subtitle {
      font-size: 15px;
      color: #666;
      margin: 0 0 32px;
    }
    .gate-form {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .gate-input {
      width: 100%;
      padding: 12px 16px;
      font-size: 15px;
      font-family: 'Inter', sans-serif;
      border: 1px solid #ddd;
      border-radius: 8px;
      outline: none;
      transition: border-color 0.15s;
      box-sizing: border-box;
    }
    .gate-input:focus {
      border-color: #006aff;
    }
    .gate-input.gate-input--error {
      border-color: #e53e3e;
    }
    .gate-btn {
      width: 100%;
      padding: 12px 16px;
      font-size: 15px;
      font-weight: 600;
      font-family: 'Inter', sans-serif;
      color: #fff;
      background: #111;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: background 0.15s;
    }
    .gate-btn:hover {
      background: #333;
    }
    .gate-error {
      font-size: 14px;
      color: #e53e3e;
      margin: 16px 0 0;
    }
    .gate-back {
      display: inline-block;
      margin-top: 24px;
      font-size: 14px;
      color: #999;
      text-decoration: none;
      transition: color 0.15s;
    }
    .gate-back:hover {
      color: #111;
    }
  `;

  document.head.appendChild(style);
  document.body.appendChild(gate);

  // Handle form submission
  const form = gate.querySelector(".gate-form");
  const input = gate.querySelector(".gate-input");
  const error = gate.querySelector(".gate-error");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (input.value === PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, "true");
      gate.remove();
      style.remove();
      document.documentElement.style.overflow = "";
    } else {
      input.classList.add("gate-input--error");
      error.hidden = false;
      input.value = "";
      input.focus();
    }
  });

  input.addEventListener("input", function () {
    input.classList.remove("gate-input--error");
    error.hidden = true;
  });
})();
