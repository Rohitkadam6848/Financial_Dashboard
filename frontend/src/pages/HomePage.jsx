import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import {
  FaRegBell,
  FaHome,
  FaExchangeAlt,
  FaArrowUp,
  FaArrowDown,
} from "react-icons/fa";
import { BsCardText, BsArrowUpRight } from "react-icons/bs";
import { CiCreditCard1 } from "react-icons/ci";
import { MdVerifiedUser, MdOutlineChecklistRtl } from "react-icons/md";
import { SiMastercard } from "react-icons/si";
import { IoMdTrendingUp, IoMdTrendingDown, IoMdRefresh } from "react-icons/io";
import { HiOutlinePlus, HiArrowsExpand } from "react-icons/hi";
import { RiNetflixFill, RiShoppingBag3Fill } from "react-icons/ri";
import { TbCurrencyDollar } from "react-icons/tb";

import { Bar, Line } from "react-chartjs-2";
import { barData, lineData } from "../data/chartData";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Tooltip,
  Legend,
  Filler,
);

// ─── Credit Score Card ────────────────────────────────────────────────────────
function CreditScoreCard() {
  const score = 850;
  const getStatus = (s) => {
    if (s >= 750) return { label: "Excellent", color: "#16a34a" };
    if (s >= 650) return { label: "Good", color: "#3b82f6" };
    if (s >= 550) return { label: "Fair", color: "#eab308" };
    return { label: "Poor", color: "#ef4444" };
  };
  const status = getStatus(score);

  const bars = [
    { color: "#22c55e", range: "800–900" },
    { color: "#86efac", range: "700–800" },
    { color: "#facc15", range: "600–700" },
    { color: "#fb923c", range: "500–600" },
    { color: "#f87171", range: "300–500" },
  ];

  // Which bar is active based on score
  const activeIdx =
    score >= 800
      ? 0
      : score >= 700
        ? 1
        : score >= 600
          ? 2
          : score >= 500
            ? 3
            : 4;

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 20,
        padding: "24px 28px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
        minHeight: 200,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        {/* Left */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span
              style={{
                fontSize: 52,
                fontWeight: 800,
                color: "#111827",
                lineHeight: 1,
              }}
            >
              {score}
            </span>
            <span
              style={{
                background: "#dcfce7",
                color: "#16a34a",
                fontSize: 11,
                fontWeight: 700,
                padding: "3px 8px",
                borderRadius: 20,
              }}
            >
              +1.5
            </span>
          </div>
          <p
            style={{
              marginTop: 6,
              fontSize: 13,
              fontWeight: 600,
              color: status.color,
            }}
          >
            {status.label}
          </p>
          <p style={{ marginTop: 40, fontSize: 11, color: "#9ca3af" }}>
            Updated 5 Days Ago
          </p>
        </div>

        {/* Right Scale */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: 140,
              fontSize: 11,
              color: "#9ca3af",
              textAlign: "right",
            }}
          >
            <span>900</span>
            <span>800</span>
            <span>700</span>
            <span>600</span>
            <span>500</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: 140,
              gap: 3,
            }}
          >
            {bars.map((b, i) => (
              <div
                key={i}
                style={{
                  width: 18,
                  height: 22,
                  borderRadius: 5,
                  background: b.color,
                  opacity: i === activeIdx ? 1 : 0.45,
                  boxShadow: i === activeIdx ? `0 0 8px ${b.color}88` : "none",
                  transition: "all 0.3s",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Payment On Time Card ─────────────────────────────────────────────────────
function PaymentOnTimeCard() {
  const dots = [
    { x: 20, y: 55, type: "ontime" },
    { x: 40, y: 35, type: "ontime" },
    { x: 60, y: 50, type: "late" },
    { x: 80, y: 25, type: "ontime" },
    { x: 100, y: 45, type: "missed" },
    { x: 120, y: 30, type: "ontime" },
    { x: 140, y: 55, type: "late" },
    { x: 160, y: 20, type: "ontime" },
    { x: 180, y: 40, type: "ontime" },
    { x: 200, y: 35, type: "missed" },
    { x: 220, y: 50, type: "ontime" },
    { x: 240, y: 28, type: "ontime" },
  ];
  const colorMap = { ontime: "#22c55e", late: "#fb923c", missed: "#f87171" };

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 20,
        padding: "24px 28px",
        boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginBottom: 4,
        }}
      >
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: 10,
            background: "#f3f4f6",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MdOutlineChecklistRtl size={18} color="#6b7280" />
        </div>
        <h2 style={{ fontWeight: 700, fontSize: 15, color: "#111827" }}>
          Payment On Time
        </h2>
      </div>

      <div style={{ display: "flex", gap: 24, marginBottom: 12 }}>
        <div>
          <p style={{ fontSize: 28, fontWeight: 800, color: "#111827" }}>2</p>
          <p style={{ fontSize: 11, color: "#6b7280" }}>Late</p>
        </div>
        <div>
          <p style={{ fontSize: 28, fontWeight: 800, color: "#22c55e" }}>14</p>
          <p style={{ fontSize: 11, color: "#6b7280" }}>On Time</p>
        </div>
        <div style={{ marginLeft: "auto", textAlign: "right" }}>
          <p style={{ fontSize: 11, color: "#9ca3af", fontWeight: 500 }}>
            Last 12 Months
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              marginTop: 4,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#fb923c",
                display: "inline-block",
              }}
            />
            <span style={{ fontSize: 11, color: "#6b7280" }}>
              Late Payments
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              marginTop: 2,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#f87171",
                display: "inline-block",
              }}
            />
            <span style={{ fontSize: 11, color: "#6b7280" }}>Missed Out</span>
          </div>
        </div>
      </div>

      {/* Scatter dot chart */}
      <svg
        width="100%"
        height="70"
        viewBox="0 0 260 70"
        style={{ overflow: "visible" }}
      >
        <line
          x1="0"
          y1="68"
          x2="260"
          y2="68"
          stroke="#f3f4f6"
          strokeWidth="1"
        />
        {dots.map((d, i) => (
          <circle
            key={i}
            cx={d.x}
            cy={d.y}
            r={5}
            fill={colorMap[d.type]}
            opacity={0.8}
          />
        ))}
      </svg>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "#f9fafb",
          borderRadius: 12,
          padding: "10px 16px",
          marginTop: 10,
        }}
      >
        <span style={{ fontWeight: 600, fontSize: 14 }}>$500</span>
        <FaExchangeAlt color="#9ca3af" size={14} />
        <span style={{ fontWeight: 600, fontSize: 14 }}>€460</span>
      </div>
    </div>
  );
}

// ─── Currency Exchange Card ───────────────────────────────────────────────────
function CurrencyExchangeCard() {
  const [fromCcy] = useState("USD");
  const [toCcy] = useState("EUR");
  const [amount] = useState("500.00");

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 20,
        padding: "24px 28px",
        boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              background: "#f3f4f6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IoMdRefresh size={18} color="#6b7280" />
          </div>
          <h2 style={{ fontWeight: 700, fontSize: 15, color: "#111827" }}>
            Currency Exchange
          </h2>
        </div>
        <BsArrowUpRight size={14} color="#9ca3af" />
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginBottom: 16,
        }}
      >
        {/* From */}
        <div
          style={{
            flex: 1,
            background: "#f9fafb",
            borderRadius: 12,
            padding: "10px 14px",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span style={{ fontSize: 18 }}>🇺🇸</span>
          <span style={{ fontWeight: 700, fontSize: 14, color: "#111827" }}>
            {fromCcy}
          </span>
          <span style={{ marginLeft: "auto", fontSize: 11, color: "#9ca3af" }}>
            ▼
          </span>
        </div>

        {/* Swap */}
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            background: "#111827",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          }}
        >
          <FaExchangeAlt size={14} color="#fff" />
        </div>

        {/* To */}
        <div
          style={{
            flex: 1,
            background: "#f9fafb",
            borderRadius: 12,
            padding: "10px 14px",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span style={{ fontSize: 18 }}>🇪🇺</span>
          <span style={{ fontWeight: 700, fontSize: 14, color: "#111827" }}>
            {toCcy}
          </span>
          <span style={{ marginLeft: "auto", fontSize: 11, color: "#9ca3af" }}>
            ▼
          </span>
        </div>
      </div>

      <div style={{ textAlign: "center", marginBottom: 12 }}>
        <p style={{ fontSize: 28, fontWeight: 800, color: "#111827" }}>
          ${amount}
        </p>
        <p style={{ fontSize: 11, color: "#9ca3af", marginTop: 2 }}>
          500 USD ≈ 500 EUR
        </p>
      </div>

      <button
        style={{
          width: "100%",
          background: "#111827",
          color: "#fff",
          border: "none",
          borderRadius: 14,
          padding: "13px",
          fontSize: 14,
          fontWeight: 700,
          cursor: "pointer",
          letterSpacing: 0.5,
        }}
      >
        Exchange
      </button>
    </div>
  );
}

// ─── Credit & Loans Card ──────────────────────────────────────────────────────
function CreditLoansCard() {
  const loans = [
    {
      bank: "TD Bank",
      type: "Auto Loan",
      paid: 12340,
      next: 525,
      date: "02.Jan 2025",
      apr: "3.3%",
      issued: "Oct 02, 2025",
      utilization: "$8,000",
      progress: 68,
    },
  ];

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 20,
        padding: "24px 28px",
        boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
      }}
    >
      <h2
        style={{
          fontWeight: 700,
          fontSize: 15,
          color: "#111827",
          marginBottom: 16,
        }}
      >
        Your Credit &amp; Loans
      </h2>

      {loans.map((loan, i) => (
        <div key={i}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 12,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  background: "#f3f4f6",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 800,
                  fontSize: 12,
                  color: "#374151",
                }}
              >
                td
              </div>
              <div>
                <p style={{ fontWeight: 700, fontSize: 14, color: "#111827" }}>
                  {loan.bank}
                </p>
                <p style={{ fontSize: 11, color: "#9ca3af" }}>{loan.type}</p>
              </div>
            </div>
            <div
              style={{
                background: "#f3f4f6",
                borderRadius: 8,
                padding: "4px 10px",
                fontSize: 11,
                color: "#6b7280",
                cursor: "pointer",
              }}
            >
              000 &gt;
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "8px 16px",
              marginBottom: 12,
            }}
          >
            <div>
              <p style={{ fontSize: 10, color: "#9ca3af", marginBottom: 2 }}>
                Paid Amount
              </p>
              <p style={{ fontSize: 16, fontWeight: 700, color: "#111827" }}>
                ${loan.paid.toLocaleString()}
              </p>
            </div>
            <div>
              <p style={{ fontSize: 10, color: "#9ca3af", marginBottom: 2 }}>
                Next Amount
              </p>
              <p style={{ fontSize: 16, fontWeight: 700, color: "#111827" }}>
                ${loan.next}
              </p>
            </div>
          </div>

          <div style={{ marginBottom: 12 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 6,
              }}
            >
              <span style={{ fontSize: 11, color: "#6b7280" }}>
                Next Payment Date
              </span>
              <span style={{ fontSize: 11, fontWeight: 600, color: "#374151" }}>
                {loan.date}
              </span>
            </div>
            <div style={{ height: 6, background: "#f3f4f6", borderRadius: 99 }}>
              <div
                style={{
                  height: 6,
                  width: `${loan.progress}%`,
                  background: "linear-gradient(90deg, #6366f1, #818cf8)",
                  borderRadius: 99,
                }}
              />
            </div>
          </div>

          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}
          >
            <div
              style={{
                background: "#f9fafb",
                borderRadius: 10,
                padding: "8px 12px",
              }}
            >
              <p style={{ fontSize: 10, color: "#9ca3af" }}>APR</p>
              <p style={{ fontSize: 13, fontWeight: 700, color: "#111827" }}>
                {loan.apr}
              </p>
            </div>
            <div
              style={{
                background: "#f9fafb",
                borderRadius: 10,
                padding: "8px 12px",
              }}
            >
              <p style={{ fontSize: 10, color: "#9ca3af" }}>Utilization</p>
              <p style={{ fontSize: 13, fontWeight: 700, color: "#111827" }}>
                {loan.utilization}
              </p>
            </div>
            <div
              style={{
                background: "#f9fafb",
                borderRadius: 10,
                padding: "8px 12px",
              }}
            >
              <p style={{ fontSize: 10, color: "#9ca3af" }}>Issued Date</p>
              <p style={{ fontSize: 12, fontWeight: 700, color: "#111827" }}>
                {loan.issued}
              </p>
            </div>
            <div
              style={{
                background: "#f9fafb",
                borderRadius: 10,
                padding: "8px 12px",
              }}
            >
              <p style={{ fontSize: 10, color: "#9ca3af" }}>APR: 5:30</p>
              <p style={{ fontSize: 13, fontWeight: 700, color: "#111827" }}>
                $3.3%
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Recent Changes Card ──────────────────────────────────────────────────────
function RecentChangesCard() {
  const transactions = [
    {
      icon: <RiNetflixFill size={18} color="#e50914" />,
      bg: "#fff5f5",
      name: "Netflix",
      sub: "Daapensement",
      amount: "$15.99",
      date: "Apr 10, 2025",
    },
    {
      icon: <RiShoppingBag3Fill size={18} color="#8b5cf6" />,
      bg: "#f5f3ff",
      name: "Nike Store",
      sub: "iskapping",
      amount: "$120.50",
      date: "Apr 10, 2025",
    },
  ];

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 20,
        padding: "24px 28px",
        boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <h2 style={{ fontWeight: 700, fontSize: 15, color: "#111827" }}>
          Recent Changes
        </h2>
        <div style={{ display: "flex", gap: 6 }}>
          <BsArrowUpRight
            size={14}
            color="#9ca3af"
            style={{ cursor: "pointer" }}
          />
          <span style={{ fontSize: 14, color: "#9ca3af", cursor: "pointer" }}>
            ▾
          </span>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {transactions.map((t, i) => (
          <div
            key={i}
            style={{ display: "flex", alignItems: "center", gap: 14 }}
          >
            <div
              style={{
                width: 42,
                height: 42,
                borderRadius: 12,
                background: t.bg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              {t.icon}
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontWeight: 600, fontSize: 14, color: "#111827" }}>
                {t.name}
              </p>
              <p style={{ fontSize: 11, color: "#9ca3af" }}>{t.sub}</p>
            </div>
            <div style={{ textAlign: "right" }}>
              <p style={{ fontWeight: 700, fontSize: 14, color: "#111827" }}>
                {t.amount}
              </p>
              <p style={{ fontSize: 11, color: "#9ca3af" }}>{t.date}</p>
            </div>
            <span style={{ fontSize: 14, color: "#d1d5db" }}>&gt;</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Credit Utilization Card ──────────────────────────────────────────────────
function CreditUtilizationCard() {
  const items = [
    {
      icon: "🟡",
      label: "Shopping",
      amount: "$0.00",
      date: "Apr 12, 2025",
      limit: "$109.00",
      progress: 0,
    },
    {
      icon: "🟢",
      label: "Groceries",
      amount: "$120.50",
      date: "Apr 11, 2025",
      limit: "$185.00",
      progress: 65,
    },
  ];

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 20,
        padding: "24px 28px",
        boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <h2 style={{ fontWeight: 700, fontSize: 15, color: "#111827" }}>
          Credit Utilization
        </h2>
        <div style={{ display: "flex", gap: 6 }}>
          <BsArrowUpRight
            size={14}
            color="#9ca3af"
            style={{ cursor: "pointer" }}
          />
          <span style={{ fontSize: 14, color: "#9ca3af", cursor: "pointer" }}>
            ▾
          </span>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {items.map((item, i) => (
          <div
            key={i}
            style={{
              background: "#f9fafb",
              borderRadius: 14,
              padding: "14px 16px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: 10,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 22 }}>{item.icon}</span>
                <div>
                  <p
                    style={{ fontWeight: 700, fontSize: 16, color: "#111827" }}
                  >
                    {item.amount}
                  </p>
                  <p style={{ fontSize: 11, color: "#9ca3af" }}>{item.label}</p>
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    justifyContent: "flex-end",
                  }}
                >
                  <span style={{ fontSize: 10 }}>📅</span>
                  <span style={{ fontSize: 11, color: "#6b7280" }}>
                    {item.date}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: "#374151",
                    marginTop: 2,
                  }}
                >
                  {item.limit}
                </p>
              </div>
            </div>
            <div style={{ height: 6, background: "#e5e7eb", borderRadius: 99 }}>
              <div
                style={{
                  height: 6,
                  width: `${item.progress}%`,
                  background: item.progress > 50 ? "#22c55e" : "#f3f4f6",
                  borderRadius: 99,
                  transition: "width 1s ease",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Main HomePage ────────────────────────────────────────────────────────────
function HomePage() {
  const [activeNav, setActiveNav] = useState(0);

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "#111827",
        titleColor: "#f9fafb",
        bodyColor: "#d1d5db",
        borderRadius: 10,
        padding: 12,
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#9ca3af", font: { size: 11 } },
      },
      y: {
        grid: { color: "#f3f4f6", drawBorder: false },
        ticks: { color: "#9ca3af", font: { size: 11 } },
      },
    },
  };

  const navItems = [
    { icon: <FaHome size={20} />, label: "Home" },
    { icon: <BsCardText size={20} />, label: "Cards" },
    { icon: <CiCreditCard1 size={22} />, label: "Credit" },
    { icon: <MdVerifiedUser size={20} />, label: "Verify" },
    { icon: <MdOutlineChecklistRtl size={20} />, label: "Tasks" },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #e8eaf6 0%, #f0f4ff 50%, #e8f4f8 100%)",
        display: "flex",
        fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
      }}
    >
      {/* ── Sidebar ── */}
      <div
        style={{
          width: 76,
          background: "rgba(255,255,255,0.85)",
          backdropFilter: "blur(12px)",
          borderRight: "1px solid rgba(0,0,0,0.05)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: 24,
          paddingBottom: 24,
          gap: 12,
          position: "sticky",
          top: 0,
          height: "100vh",
          boxShadow: "2px 0 20px rgba(0,0,0,0.04)",
        }}
      >
        {/* Logo */}
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: 14,
            background: "#111827",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 24,
            boxShadow: "0 4px 12px rgba(17,24,39,0.35)",
          }}
        >
          <MdVerifiedUser size={22} color="#fff" />
        </div>

        {navItems.map((item, i) => (
          <button
            key={i}
            onClick={() => setActiveNav(i)}
            title={item.label}
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: activeNav === i ? "#111827" : "#f3f4f6",
              color: activeNav === i ? "#fff" : "#6b7280",
              transition: "all 0.2s",
              boxShadow:
                activeNav === i ? "0 4px 12px rgba(17,24,39,0.3)" : "none",
            }}
          >
            {item.icon}
          </button>
        ))}

        {/* Bottom refresh */}
        <div
          style={{
            marginTop: "auto",
            width: 44,
            height: 44,
            borderRadius: 12,
            background: "#f3f4f6",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <IoMdRefresh size={20} color="#9ca3af" />
        </div>
      </div>

      {/* ── Main Content ── */}
      <div style={{ flex: 1, padding: "28px 32px", overflowY: "auto" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 24,
          }}
        >
          <div style={{ position: "relative", width: 320 }}>
            <AiOutlineSearch
              style={{
                position: "absolute",
                left: 14,
                top: "50%",
                transform: "translateY(-50%)",
                color: "#9ca3af",
              }}
              size={16}
            />
            <input
              type="text"
              placeholder="Search Transaction..."
              style={{
                width: "100%",
                paddingLeft: 40,
                paddingRight: 16,
                paddingTop: 11,
                paddingBottom: 11,
                borderRadius: 14,
                background: "rgba(255,255,255,0.9)",
                border: "1px solid rgba(0,0,0,0.07)",
                fontSize: 13,
                color: "#374151",
                outline: "none",
                boxSizing: "border-box",
                backdropFilter: "blur(8px)",
              }}
            />
          </div>

          <div
            style={{
              width: 42,
              height: 42,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.9)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
              cursor: "pointer",
              position: "relative",
              backdropFilter: "blur(8px)",
            }}
          >
            <FaRegBell size={16} color="#374151" />
            <span
              style={{
                position: "absolute",
                top: 8,
                right: 10,
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#ef4444",
                border: "2px solid white",
              }}
            />
          </div>
        </div>

        {/* Welcome */}
        <div style={{ marginBottom: 24 }}>
          <p style={{ fontSize: 13, color: "#6b7280", marginBottom: 4 }}>
            <span style={{ marginRight: 6 }}>🟡</span>Welcome in, John
          </p>
          <h1
            style={{
              fontSize: 30,
              fontWeight: 800,
              color: "#111827",
              letterSpacing: -0.5,
            }}
          >
            Financial Overview
          </h1>
        </div>

        {/* ── Row 1: Balance + Chart + Credit Score ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 2fr 1fr",
            gap: 20,
            marginBottom: 20,
          }}
        >
          {/* Balance Card */}
          <div
            style={{
              background: "#fff",
              borderRadius: 20,
              padding: "24px",
              boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 16,
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  background: "#f3f4f6",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <TbCurrencyDollar size={18} color="#6b7280" />
              </div>
              <h2 style={{ fontWeight: 700, fontSize: 15, color: "#111827" }}>
                My Balance
              </h2>
            </div>

            {/* Credit Card */}
            <div
              style={{
                borderRadius: 16,
                padding: "20px",
                background:
                  "linear-gradient(135deg, #4ade80 0%, #3b82f6 50%, #6366f1 100%)",
                color: "white",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 8px 24px rgba(99,102,241,0.35)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: -20,
                  right: -20,
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.1)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: -10,
                  left: 60,
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.07)",
                }}
              />
              <SiMastercard
                style={{
                  position: "absolute",
                  right: 16,
                  top: 14,
                  opacity: 0.5,
                }}
                size={30}
              />
              <p
                style={{
                  fontSize: 11,
                  opacity: 0.85,
                  fontWeight: 600,
                  letterSpacing: 1,
                }}
              >
                CreditLym
              </p>
              <p
                style={{
                  fontFamily: "monospace",
                  fontSize: 13,
                  marginTop: 10,
                  letterSpacing: 2,
                  opacity: 0.9,
                }}
              >
                8763 2736 9873 0329
              </p>
              <p
                style={{
                  fontSize: 10,
                  marginTop: 8,
                  opacity: 0.75,
                  letterSpacing: 1,
                }}
              >
                HILLARY NEVLINA
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 12,
                }}
              >
                <span style={{ fontSize: 11, opacity: 0.75 }}>credit</span>
                <span style={{ fontSize: 20, fontWeight: 800 }}>$5,238.90</span>
              </div>
            </div>

            <button
              style={{
                width: "100%",
                marginTop: 14,
                background: "#f9fafb",
                border: "1px solid #e5e7eb",
                borderRadius: 12,
                padding: "10px",
                fontSize: 12,
                fontWeight: 600,
                color: "#374151",
                cursor: "pointer",
              }}
            >
              View All Balances
            </button>
          </div>

          {/* Bar Chart */}
          <div
            style={{
              background: "#fff",
              borderRadius: 20,
              padding: "24px",
              boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 16,
              }}
            >
              <div>
                <h2 style={{ fontWeight: 700, fontSize: 15, color: "#111827" }}>
                  Income vs Expense
                </h2>
                <p style={{ fontSize: 11, color: "#9ca3af", marginTop: 2 }}>
                  Mar 01, 2025
                </p>
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                  <span
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: 3,
                      background: "#4ade80",
                      display: "inline-block",
                    }}
                  />
                  <span style={{ fontSize: 11, color: "#6b7280" }}>Income</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                  <span
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: 3,
                      background: "#fb923c",
                      display: "inline-block",
                    }}
                  />
                  <span style={{ fontSize: 11, color: "#6b7280" }}>
                    Expense
                  </span>
                </div>
                <div
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 8,
                    background: "#111827",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  <HiArrowsExpand size={14} color="#fff" />
                </div>
              </div>
            </div>
            <div style={{ height: 200 }}>
              <Bar data={barData} options={chartOptions} />
            </div>
          </div>

          {/* Credit Score */}
          <CreditScoreCard />
        </div>

        {/* ── Row 2: Payment + Currency + Loans ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr 1fr",
            gap: 20,
            marginBottom: 20,
          }}
        >
          <PaymentOnTimeCard />
          <CurrencyExchangeCard />
          <CreditLoansCard />
        </div>

        {/* ── Row 3: Recent Changes + Credit Utilization ── */}
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}
        >
          <RecentChangesCard />
          <CreditUtilizationCard />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
