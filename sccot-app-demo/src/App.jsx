import { useState } from "react";

const NAVY = "#0B2340";
const TEAL = "#028090";
const MINT = "#02C39A";
const GOLD = "#C9A84C";

const eventos = [
  {
    id: 1,
    tipo: "Congreso",
    nombre: "71° Congreso Nacional SCCOT",
    fecha: "6 - 9 Mayo 2026",
    lugar: "Cartagena, Colombia",
    cupos: 613,
    confirmados: 596,
    badge: "🔥 Próximo",
    badgeColor: "#E53935",
    descripcion: "El evento académico más importante de la ortopedia colombiana. Conferencias magistrales, talleres y actualización científica.",
    imagen: "🏛️",
  },
  {
    id: 2,
    tipo: "Curso Seccional",
    nombre: "Seccional Tolima — Curso de Posgrado",
    fecha: "19 - 20 Junio 2026",
    lugar: "Ibagué, Colombia",
    cupos: 1,
    confirmados: 1,
    badge: "📚 Curso",
    badgeColor: TEAL,
    descripcion: "Actualización en técnicas quirúrgicas para residentes y especialistas de la región Tolima.",
    imagen: "🎓",
  },
  {
    id: 3,
    tipo: "Curso Internacional",
    nombre: "14° Curso Internacional de Columna",
    fecha: "6 - 9 Mayo 2026",
    lugar: "Cartagena, Colombia",
    cupos: 80,
    confirmados: 0,
    badge: "🌎 Internacional",
    badgeColor: MINT,
    descripcion: "Curso intensivo de técnicas avanzadas en cirugía de columna con expertos internacionales.",
    imagen: "🦴",
  },
];

const noticias = [
  {
    id: 1,
    categoria: "Institucional",
    titulo: "SCCOT cumple 80 años liderando la ortopedia latinoamericana",
    fecha: "28 Mayo 2026",
    resumen: "En su octava década, la Sociedad consolida su posición como referente científico en la región con más de 1.800 miembros activos.",
    emoji: "🏆",
    color: GOLD,
  },
  {
    id: 2,
    categoria: "Convocatoria",
    titulo: "Abierta convocatoria para el Premio Nacional de Investigación SCCOT 2026",
    fecha: "15 Abril 2026",
    resumen: "Los miembros activos pueden postular sus trabajos de investigación hasta el 30 de junio. Premios en efectivo y publicación en RCCOT.",
    emoji: "🔬",
    color: TEAL,
  },
  {
    id: 3,
    categoria: "RCCOT",
    titulo: "Nueva edición de la Revista Colombiana de Ortopedia ya disponible",
    fecha: "1 Mayo 2026",
    resumen: "Vol. 40, Nro. 1 incluye artículos sobre artroplastia de cadera, técnicas mínimamente invasivas y trauma ortopédico.",
    emoji: "📖",
    color: "#5C6BC0",
  },
  {
    id: 4,
    categoria: "Alianza",
    titulo: "SCCOT e IPS nacionales firman convenio de tarifas para miembros",
    fecha: "10 Abril 2026",
    resumen: "Nuevos convenios con clínicas en Bogotá, Medellín y Cali ofrecen tarifas preferenciales en equipos y materiales quirúrgicos.",
    emoji: "🤝",
    color: MINT,
  },
];

const miembro = {
  nombre: "Dr. Carlos Mendoza García",
  categoria: "Miembro Titular",
  estado: "Al día",
  seccional: "Seccional Huila",
  cedula: "1098765432",
  vencimiento: "31 Diciembre 2026",
  anualidades: 8,
  desde: "2018",
  eventos_inscritos: 3,
  avatar: "CM",
};

export default function SCCOTApp() {
  const [tab, setTab] = useState("inicio");
  const [eventoAbierto, setEventoAbierto] = useState(null);
  const [noticiaAbierta, setNoticiaAbierta] = useState(null);
  const [notifVisible, setNotifVisible] = useState(true);

  const tabs = [
    { id: "inicio", icon: "⊞", label: "Inicio" },
    { id: "eventos", icon: "📅", label: "Eventos" },
    { id: "noticias", icon: "📰", label: "Noticias" },
    { id: "perfil", icon: "👤", label: "Mi Perfil" },
  ];

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      background: `linear-gradient(135deg, ${NAVY} 0%, #1a3a5c 50%, #0d2a45 100%)`,
      fontFamily: "'Segoe UI', system-ui, sans-serif",
      padding: "20px",
    }}>
      {/* Phone frame */}
      <div style={{
        width: 390,
        height: 844,
        background: "#f0f4f8",
        borderRadius: 50,
        overflow: "hidden",
        boxShadow: "0 40px 80px rgba(0,0,0,0.6), 0 0 0 12px #1a1a2e, 0 0 0 14px #0d0d1a",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}>
        {/* Status bar */}
        <div style={{
          background: NAVY,
          color: "white",
          padding: "12px 24px 6px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 12,
          fontWeight: 600,
        }}>
          <span>9:41</span>
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <span>●●●●</span>
            <span>WiFi</span>
            <span>🔋</span>
          </div>
        </div>

        {/* Header */}
        <div style={{
          background: `linear-gradient(135deg, ${NAVY} 0%, #1a3a5c 100%)`,
          padding: "16px 20px 24px",
          color: "white",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", top: -20, right: -20,
            width: 120, height: 120,
            borderRadius: "50%",
            background: `${TEAL}22`,
          }}/>
          <div style={{
            position: "absolute", bottom: -30, left: -10,
            width: 80, height: 80,
            borderRadius: "50%",
            background: `${GOLD}15`,
          }}/>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative" }}>
            <div>
              <div style={{ fontSize: 11, color: `${MINT}cc`, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase" }}>
                SCCOT
              </div>
              <div style={{ fontSize: 18, fontWeight: 700, marginTop: 2 }}>
                Sociedad Colombiana
              </div>
              <div style={{ fontSize: 13, color: `rgba(255,255,255,0.7)`, marginTop: 1 }}>
                Ortopedia y Traumatología
              </div>
            </div>
            <div style={{
              width: 44, height: 44,
              background: `linear-gradient(135deg, ${TEAL}, ${MINT})`,
              borderRadius: 14,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 20,
              boxShadow: `0 4px 12px ${TEAL}60`,
            }}>
              🦴
            </div>
          </div>

          {/* Notif banner */}
          {notifVisible && tab === "inicio" && (
            <div style={{
              marginTop: 14,
              background: `linear-gradient(135deg, ${GOLD}22, ${GOLD}11)`,
              border: `1px solid ${GOLD}44`,
              borderRadius: 12,
              padding: "10px 14px",
              display: "flex",
              alignItems: "center",
              gap: 10,
              position: "relative",
            }}>
              <span style={{ fontSize: 18 }}>🔥</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 11, color: GOLD, fontWeight: 700 }}>CONGRESO NACIONAL</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.9)" }}>Faltan pocos días — 6 May, Cartagena</div>
              </div>
              <button
                onClick={() => setNotifVisible(false)}
                style={{ background: "none", border: "none", color: "rgba(255,255,255,0.5)", cursor: "pointer", fontSize: 16, padding: 0 }}
              >×</button>
            </div>
          )}
        </div>

        {/* Content area */}
        <div style={{ flex: 1, overflowY: "auto", background: "#f0f4f8" }}>

          {/* ── INICIO ── */}
          {tab === "inicio" && (
            <div style={{ padding: "16px 16px 80px" }}>
              {/* Quick stats */}
              <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
                {[
                  { label: "Estado", value: "Al día", color: "#2e7d32", bg: "#e8f5e9", icon: "✅" },
                  { label: "Eventos", value: "3 inscritos", color: TEAL, bg: "#e0f7fa", icon: "📅" },
                  { label: "Anualidades", value: "8 años", color: NAVY, bg: "#e8eaf6", icon: "🏆" },
                ].map((s, i) => (
                  <div key={i} style={{
                    flex: 1,
                    background: "white",
                    borderRadius: 16,
                    padding: "12px 10px",
                    textAlign: "center",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                  }}>
                    <div style={{ fontSize: 18, marginBottom: 4 }}>{s.icon}</div>
                    <div style={{
                      fontSize: 10,
                      fontWeight: 700,
                      color: s.color,
                      background: s.bg,
                      borderRadius: 20,
                      padding: "2px 6px",
                      display: "inline-block",
                    }}>{s.value}</div>
                    <div style={{ fontSize: 9, color: "#999", marginTop: 4 }}>{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Próximo evento destacado */}
              <div style={{ marginBottom: 20 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: NAVY, marginBottom: 10 }}>📌 Evento destacado</div>
                <div
                  onClick={() => { setEventoAbierto(eventos[0]); setTab("eventos"); }}
                  style={{
                    background: `linear-gradient(135deg, ${NAVY} 0%, ${TEAL} 100%)`,
                    borderRadius: 20,
                    padding: "20px",
                    color: "white",
                    cursor: "pointer",
                    boxShadow: `0 8px 24px ${NAVY}40`,
                  }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div>
                      <div style={{
                        fontSize: 10, fontWeight: 700,
                        background: "#E5393530",
                        border: "1px solid #E5393560",
                        color: "#ff8a80",
                        borderRadius: 20, padding: "3px 10px",
                        display: "inline-block", marginBottom: 8,
                      }}>🔥 EN DÍAS</div>
                      <div style={{ fontSize: 16, fontWeight: 700, lineHeight: 1.3 }}>71° Congreso Nacional SCCOT</div>
                      <div style={{ fontSize: 12, color: "rgba(255,255,255,0.75)", marginTop: 6 }}>📅 6-9 Mayo 2026  •  📍 Cartagena</div>
                    </div>
                    <div style={{ fontSize: 36 }}>🏛️</div>
                  </div>
                  <div style={{
                    marginTop: 16,
                    background: "rgba(255,255,255,0.15)",
                    borderRadius: 12,
                    padding: "10px 14px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}>
                    <div>
                      <div style={{ fontSize: 9, color: "rgba(255,255,255,0.6)" }}>ASISTENTES</div>
                      <div style={{ fontSize: 14, fontWeight: 700 }}>596 confirmados</div>
                    </div>
                    <div style={{
                      background: MINT,
                      color: NAVY,
                      borderRadius: 20,
                      padding: "8px 16px",
                      fontSize: 12,
                      fontWeight: 700,
                    }}>Ver detalles →</div>
                  </div>
                </div>
              </div>

              {/* Noticias recientes */}
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: NAVY, marginBottom: 10 }}>📰 Últimas noticias</div>
                {noticias.slice(0, 2).map(n => (
                  <div
                    key={n.id}
                    onClick={() => { setNoticiaAbierta(n); setTab("noticias"); }}
                    style={{
                      background: "white",
                      borderRadius: 16,
                      padding: 14,
                      marginBottom: 10,
                      display: "flex",
                      gap: 12,
                      cursor: "pointer",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                    }}>
                    <div style={{
                      width: 44, height: 44,
                      background: `${n.color}18`,
                      borderRadius: 14,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 22,
                      flexShrink: 0,
                    }}>{n.emoji}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{
                        fontSize: 9, fontWeight: 700, color: n.color,
                        textTransform: "uppercase", letterSpacing: 0.5,
                      }}>{n.categoria}</div>
                      <div style={{ fontSize: 13, fontWeight: 600, color: NAVY, lineHeight: 1.3, marginTop: 2 }}>{n.titulo}</div>
                      <div style={{ fontSize: 10, color: "#999", marginTop: 4 }}>{n.fecha}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── EVENTOS ── */}
          {tab === "eventos" && !eventoAbierto && (
            <div style={{ padding: "16px 16px 80px" }}>
              <div style={{ fontSize: 16, fontWeight: 700, color: NAVY, marginBottom: 16 }}>📅 Próximos Eventos</div>
              {eventos.map(e => (
                <div
                  key={e.id}
                  onClick={() => setEventoAbierto(e)}
                  style={{
                    background: "white",
                    borderRadius: 20,
                    marginBottom: 14,
                    overflow: "hidden",
                    cursor: "pointer",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                  }}>
                  <div style={{
                    background: `linear-gradient(135deg, ${NAVY}, #1a3a5c)`,
                    padding: "16px 18px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}>
                    <div>
                      <div style={{
                        fontSize: 10, fontWeight: 700,
                        color: e.badgeColor,
                        background: `${e.badgeColor}22`,
                        borderRadius: 20, padding: "3px 10px",
                        display: "inline-block", marginBottom: 6,
                      }}>{e.badge}</div>
                      <div style={{ color: "white", fontSize: 15, fontWeight: 700, lineHeight: 1.3 }}>{e.nombre}</div>
                    </div>
                    <div style={{ fontSize: 32 }}>{e.imagen}</div>
                  </div>
                  <div style={{ padding: "14px 18px" }}>
                    <div style={{ display: "flex", gap: 16, marginBottom: 12 }}>
                      <div style={{ fontSize: 12, color: "#666" }}>📅 {e.fecha}</div>
                      <div style={{ fontSize: 12, color: "#666" }}>📍 {e.lugar}</div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div>
                        <div style={{ fontSize: 10, color: "#999" }}>Confirmados</div>
                        <div style={{ fontSize: 13, fontWeight: 700, color: TEAL }}>{e.confirmados} / {e.cupos}</div>
                      </div>
                      <div style={{
                        background: `linear-gradient(135deg, ${TEAL}, ${MINT})`,
                        color: "white",
                        borderRadius: 20,
                        padding: "8px 18px",
                        fontSize: 12,
                        fontWeight: 700,
                      }}>Ver más →</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ── DETALLE EVENTO ── */}
          {tab === "eventos" && eventoAbierto && (
            <div style={{ padding: "0 0 80px" }}>
              <div style={{
                background: `linear-gradient(135deg, ${NAVY}, #1a3a5c)`,
                padding: "20px",
                color: "white",
              }}>
                <button
                  onClick={() => setEventoAbierto(null)}
                  style={{ background: "rgba(255,255,255,0.15)", border: "none", color: "white", borderRadius: 20, padding: "6px 14px", cursor: "pointer", marginBottom: 14, fontSize: 13 }}>
                  ← Volver
                </button>
                <div style={{ fontSize: 32, marginBottom: 8 }}>{eventoAbierto.imagen}</div>
                <div style={{
                  fontSize: 10, color: eventoAbierto.badgeColor, fontWeight: 700,
                  background: `${eventoAbierto.badgeColor}22`, borderRadius: 20,
                  padding: "3px 10px", display: "inline-block", marginBottom: 8,
                }}>{eventoAbierto.badge}</div>
                <div style={{ fontSize: 20, fontWeight: 700 }}>{eventoAbierto.nombre}</div>
              </div>
              <div style={{ padding: "20px" }}>
                <div style={{ background: "white", borderRadius: 16, padding: 16, marginBottom: 14, boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
                  {[
                    ["📅 Fecha", eventoAbierto.fecha],
                    ["📍 Lugar", eventoAbierto.lugar],
                    ["🎫 Cupos totales", eventoAbierto.cupos],
                    ["✅ Confirmados", eventoAbierto.confirmados],
                  ].map(([k, v], i) => (
                    <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: i < 3 ? "1px solid #f0f4f8" : "none" }}>
                      <span style={{ fontSize: 13, color: "#666" }}>{k}</span>
                      <span style={{ fontSize: 13, fontWeight: 600, color: NAVY }}>{v}</span>
                    </div>
                  ))}
                </div>
                <div style={{ background: "white", borderRadius: 16, padding: 16, marginBottom: 20, boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: NAVY, marginBottom: 8 }}>Descripción</div>
                  <div style={{ fontSize: 13, color: "#555", lineHeight: 1.6 }}>{eventoAbierto.descripcion}</div>
                </div>
                <button style={{
                  width: "100%",
                  background: `linear-gradient(135deg, ${TEAL}, ${MINT})`,
                  color: "white",
                  border: "none",
                  borderRadius: 16,
                  padding: "16px",
                  fontSize: 15,
                  fontWeight: 700,
                  cursor: "pointer",
                  boxShadow: `0 8px 20px ${TEAL}40`,
                }}>
                  🎟️ Inscribirme a este evento
                </button>
              </div>
            </div>
          )}

          {/* ── NOTICIAS ── */}
          {tab === "noticias" && !noticiaAbierta && (
            <div style={{ padding: "16px 16px 80px" }}>
              <div style={{ fontSize: 16, fontWeight: 700, color: NAVY, marginBottom: 16 }}>📰 Noticias SCCOT</div>
              {noticias.map(n => (
                <div
                  key={n.id}
                  onClick={() => setNoticiaAbierta(n)}
                  style={{
                    background: "white",
                    borderRadius: 20,
                    marginBottom: 14,
                    overflow: "hidden",
                    cursor: "pointer",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                  }}>
                  <div style={{
                    height: 6,
                    background: `linear-gradient(90deg, ${n.color}, ${n.color}80)`,
                  }}/>
                  <div style={{ padding: "16px" }}>
                    <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                      <div style={{
                        width: 48, height: 48,
                        background: `${n.color}15`,
                        borderRadius: 14,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 24, flexShrink: 0,
                      }}>{n.emoji}</div>
                      <div style={{ flex: 1 }}>
                        <div style={{
                          fontSize: 9, fontWeight: 700,
                          color: n.color, textTransform: "uppercase", letterSpacing: 0.5,
                          marginBottom: 4,
                        }}>{n.categoria}  •  {n.fecha}</div>
                        <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, lineHeight: 1.4 }}>{n.titulo}</div>
                        <div style={{ fontSize: 12, color: "#777", marginTop: 6, lineHeight: 1.5 }}>{n.resumen.substring(0, 80)}...</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ── DETALLE NOTICIA ── */}
          {tab === "noticias" && noticiaAbierta && (
            <div style={{ padding: "20px 20px 80px" }}>
              <button
                onClick={() => setNoticiaAbierta(null)}
                style={{ background: `${NAVY}15`, border: "none", color: NAVY, borderRadius: 20, padding: "8px 16px", cursor: "pointer", marginBottom: 16, fontSize: 13, fontWeight: 600 }}>
                ← Volver
              </button>
              <div style={{
                width: 64, height: 64,
                background: `${noticiaAbierta.color}18`,
                borderRadius: 20,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 36, marginBottom: 14,
              }}>{noticiaAbierta.emoji}</div>
              <div style={{
                fontSize: 10, fontWeight: 700, color: noticiaAbierta.color,
                textTransform: "uppercase", letterSpacing: 1, marginBottom: 8,
              }}>{noticiaAbierta.categoria}  •  {noticiaAbierta.fecha}</div>
              <div style={{ fontSize: 20, fontWeight: 700, color: NAVY, lineHeight: 1.4, marginBottom: 16 }}>{noticiaAbierta.titulo}</div>
              <div style={{ fontSize: 14, color: "#555", lineHeight: 1.8 }}>{noticiaAbierta.resumen}</div>
              <div style={{ fontSize: 14, color: "#555", lineHeight: 1.8, marginTop: 12 }}>
                La SCCOT continúa fortaleciendo su posición como la sociedad científica más importante de la ortopedia colombiana,
                con más de 80 años de historia y presencia en 20 seccionales regionales del país.
                Esta iniciativa refuerza el compromiso institucional con el desarrollo académico y científico de todos sus miembros.
              </div>
            </div>
          )}

          {/* ── PERFIL ── */}
          {tab === "perfil" && (
            <div style={{ padding: "16px 16px 80px" }}>
              {/* Card miembro */}
              <div style={{
                background: `linear-gradient(135deg, ${NAVY} 0%, ${TEAL} 100%)`,
                borderRadius: 24,
                padding: "24px",
                color: "white",
                marginBottom: 16,
                boxShadow: `0 8px 24px ${NAVY}50`,
              }}>
                <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 20 }}>
                  <div style={{
                    width: 60, height: 60,
                    background: `linear-gradient(135deg, ${GOLD}, ${MINT})`,
                    borderRadius: 20,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 20, fontWeight: 700, color: NAVY,
                  }}>{miembro.avatar}</div>
                  <div>
                    <div style={{ fontSize: 16, fontWeight: 700 }}>{miembro.nombre}</div>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", marginTop: 2 }}>{miembro.categoria}</div>
                    <div style={{
                      marginTop: 6, display: "inline-block",
                      background: "#2e7d3260",
                      border: "1px solid #4caf5080",
                      color: "#a5d6a7",
                      borderRadius: 20, padding: "3px 12px",
                      fontSize: 11, fontWeight: 700,
                    }}>✅ {miembro.estado}</div>
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  {[
                    ["Seccional", miembro.seccional.replace("Seccional ", "")],
                    ["Desde", miembro.desde],
                    ["Anualidades", miembro.anualidades],
                  ].map(([k, v], i) => (
                    <div key={i} style={{ textAlign: "center" }}>
                      <div style={{ fontSize: 9, color: "rgba(255,255,255,0.6)", textTransform: "uppercase" }}>{k}</div>
                      <div style={{ fontSize: 14, fontWeight: 700 }}>{v}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Info detalle */}
              <div style={{ background: "white", borderRadius: 20, padding: 16, marginBottom: 14, boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: NAVY, marginBottom: 12 }}>Información de membresía</div>
                {[
                  ["Estado membresía", miembro.estado, "#2e7d32"],
                  ["Categoría", miembro.categoria, TEAL],
                  ["Seccional", miembro.seccional, "#666"],
                  ["Vencimiento anualidad", miembro.vencimiento, "#666"],
                  ["Cédula", miembro.cedula, "#666"],
                ].map(([k, v, c], i) => (
                  <div key={i} style={{
                    display: "flex", justifyContent: "space-between",
                    padding: "10px 0",
                    borderBottom: i < 4 ? "1px solid #f0f4f8" : "none",
                  }}>
                    <span style={{ fontSize: 13, color: "#888" }}>{k}</span>
                    <span style={{ fontSize: 13, fontWeight: 600, color: c }}>{v}</span>
                  </div>
                ))}
              </div>

              {/* Acciones */}
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <button style={{
                  background: `linear-gradient(135deg, ${TEAL}, ${MINT})`,
                  color: "white", border: "none", borderRadius: 16,
                  padding: "14px", fontSize: 14, fontWeight: 700, cursor: "pointer",
                  boxShadow: `0 6px 16px ${TEAL}40`,
                }}>
                  💳 Renovar anualidad 2027
                </button>
                <button style={{
                  background: "white",
                  color: NAVY, border: `2px solid ${NAVY}20`, borderRadius: 16,
                  padding: "14px", fontSize: 14, fontWeight: 700, cursor: "pointer",
                }}>
                  📋 Mis eventos inscritos ({miembro.eventos_inscritos})
                </button>
                <button style={{
                  background: "white",
                  color: "#666", border: "2px solid #f0f4f8", borderRadius: 16,
                  padding: "14px", fontSize: 13, cursor: "pointer",
                }}>
                  📞 Contactar a la SCCOT
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Bottom nav */}
        <div style={{
          background: "white",
          borderTop: "1px solid #e8eef4",
          display: "flex",
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          boxShadow: "0 -4px 20px rgba(0,0,0,0.08)",
        }}>
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => { setTab(t.id); setEventoAbierto(null); setNoticiaAbierta(null); }}
              style={{
                flex: 1,
                background: "none",
                border: "none",
                padding: "10px 6px 16px",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 4,
                transition: "all 0.2s",
              }}>
              <div style={{ fontSize: 20 }}>{t.icon}</div>
              <div style={{
                fontSize: 10,
                fontWeight: tab === t.id ? 700 : 500,
                color: tab === t.id ? TEAL : "#aaa",
              }}>{t.label}</div>
              {tab === t.id && (
                <div style={{
                  width: 4, height: 4,
                  borderRadius: "50%",
                  background: TEAL,
                  marginTop: -2,
                }}/>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Label */}
      <div style={{ position: "absolute", bottom: 20, color: "rgba(255,255,255,0.4)", fontSize: 12, textAlign: "center" }}>
        Prototipo interactivo — App SCCOT · NeurallFlow IA
      </div>
    </div>
  );
}
