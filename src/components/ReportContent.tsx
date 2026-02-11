"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "duvetica-report-content";

export default function ReportContent() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [hasSavedContent, setHasSavedContent] = useState(false);

  // localStorage에서 저장된 내용 복원
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && contentRef.current) {
      contentRef.current.innerHTML = saved;
      setHasSavedContent(true);
    }
  }, []);

  // contentEditable 토글
  const toggleEditing = useCallback(() => {
    if (isEditing) {
      // 편집 모드 해제 시 - 변경 취소
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && contentRef.current) {
        contentRef.current.innerHTML = saved;
      } else if (contentRef.current) {
        // 저장된 게 없으면 원본으로
        window.location.reload();
      }
    }
    setIsEditing(!isEditing);
  }, [isEditing]);

  // 저장
  const handleSave = useCallback(() => {
    if (contentRef.current) {
      localStorage.setItem(STORAGE_KEY, contentRef.current.innerHTML);
      setHasSavedContent(true);
      setIsEditing(false);
      setToast("✅ 저장되었습니다!");
      setTimeout(() => setToast(null), 2000);
    }
  }, []);

  // 초기화 (원본으로 복원)
  const handleReset = useCallback(() => {
    if (window.confirm("저장된 수정사항을 모두 삭제하고 원본으로 복원하시겠습니까?")) {
      localStorage.removeItem(STORAGE_KEY);
      setHasSavedContent(false);
      setIsEditing(false);
      window.location.reload();
    }
  }, []);

  // 편집 가능한 영역에 contentEditable 적용
  useEffect(() => {
    if (!contentRef.current) return;
    const editableSelectors = [
      "h1", "p", "td", "th", "li", "strong",
      ".box-title", ".kpi-label", ".kpi-value", ".kpi-change",
      ".big-num", ".sub", ".page-title", ".section-title",
      ".insight-title", ".footer", ".box > div:not(.box-title)"
    ];

    const elements = contentRef.current.querySelectorAll(editableSelectors.join(","));
    elements.forEach((el) => {
      if (isEditing) {
        el.setAttribute("contenteditable", "true");
      } else {
        el.removeAttribute("contenteditable");
      }
    });
  }, [isEditing]);

  return (
    <>
      {/* 편집 모드 툴바 */}
      {isEditing && (
        <div className="edit-toolbar">
          <span>✏️ 편집 모드 — 텍스트를 클릭하여 수정하세요</span>
          <div>
            <button className="btn-save" onClick={handleSave}>💾 저장</button>
            <button className="btn-cancel" onClick={toggleEditing}>✖ 취소</button>
            {hasSavedContent && (
              <button className="btn-reset" onClick={handleReset}>🔄 원본 복원</button>
            )}
          </div>
        </div>
      )}

      {/* 토스트 알림 */}
      {toast && <div className="toast">{toast}</div>}

      {/* 편집 모드 토글 버튼 */}
      <button
        className="edit-toggle-btn"
        onClick={isEditing ? handleSave : toggleEditing}
        title={isEditing ? "저장" : "편집 모드"}
      >
        {isEditing ? "💾" : "✏️"}
      </button>

      {/* 네비게이션 */}
      <div className={`nav ${isEditing ? "" : ""}`} id="top" style={isEditing ? { top: "46px" } : undefined}>
        <a href="#sec1">🎯 전략 &amp; Action</a>
        <a href="#sec2">📊 Executive Summary</a>
        <a href="#sec3">📈 채널분석</a>
        <a href="#sec4">🏷️ 상품/재고</a>
        <a href="#sec5">🏪 매장효율</a>
      </div>

      {/* 메인 콘텐츠 */}
      <div className={isEditing ? "editing-mode" : ""}>
        <div className="wrap" ref={contentRef}>

          {/* 헤더 */}
          <div className="header">
            <div className="header-left">
              <h1>🧥 DUVETICA 브랜드 2026년 1월 경영 보고서</h1>
              <p>경영관리팀 FP&amp;A | 보고일: 2026년 2월 11일</p>
            </div>
            <div className="header-right">
              <div className="big-num">3,833<span>백만원</span></div>
              <div className="sub">실판매출 YoY 165% (사입제외) | 영업이익률 13.6%</div>
            </div>
          </div>

          {/* 1. 전략 & Action Plan */}
          <div className="page-title" id="sec1">1. 전략 &amp; Action Plan - 즉시/단기/중장기 과제</div>

          <div className="container">
            <div className="left">
              <div className="box box-red">
                <div className="box-title red">⚡ 즉시 실행 (1개월 내)</div>
                <ul>
                  <li><strong>MEN DOWN 판매율 집중 육성</strong>
                    <ul>
                      <li>MEN 매출 비중 23%로 성별 불균형 심화 → 목표 30% 확대</li>
                      <li>MEN DOWN 판매율 36.0% → 40% 목표, WOMEN DOWN 성공공식 벤치마킹</li>
                      <li>조치: 핵심 소재/기장 맞춤 전략 수립, 남성 디지털 마케팅 예산 50% 증액</li>
                    </ul>
                  </li>
                  <li><strong>가방 재고 리스크 관리</strong>
                    <ul>
                      <li>가방 재고 TAG 23.0억 중 26N 선입고 10.7억(토리아나 8.2억, 사비아노 외 2.5억)</li>
                      <li>가방 재고주수 143.6주(전년 53.1주, +90.5주) 급등 — 전년 대비 재고 351%</li>
                      <li>조치: 26S ACC 목표 판매율 60%, 8월말 35주 관리 목표 설정</li>
                    </ul>
                  </li>
                  <li><strong>현대신촌 클로징 검토 착수</strong>
                    <ul>
                      <li>할인율 22.8%p 축소(32.7%→9.9%)에도 직접이익 5백만원 저수익 지속</li>
                      <li>구조적 수익성 진단 후 상반기 내 의사결정 완료</li>
                    </ul>
                  </li>
                  <li><strong>SSF샵 매출 급감 대응</strong>
                    <ul>
                      <li>MTH 매출 82백만원(YoY -70.5%) 급감 → 원인분석 및 긴급 대응</li>
                      <li>무신사 수수료 재협상 착수 (현 37.6% → 목표 32% 이하)</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="box box-yellow">
                <div className="box-title yellow">📋 단기 실행 (1분기 내)</div>
                <ul>
                  <li><strong>자사몰 고수익 구조 확대</strong>
                    <ul>
                      <li>자사몰 직접이익률 69.0% vs 제휴몰 41.7% → 자사몰 트래픽 확대</li>
                      <li>자사몰 매출 비중 25.1% → 30% 확대 목표</li>
                      <li>자사몰 할인율 12.3% 수준 유지 전략 수립</li>
                    </ul>
                  </li>
                  <li><strong>포트폴리오 다변화 추진</strong>
                    <ul>
                      <li>다운점퍼 의존도 83.7% → 팬츠, 니트, 방풍자켓 확대 투자</li>
                      <li>봄/여름 경량 아우터(반팔다운, 방풍자켓) 조기 런칭 기획</li>
                    </ul>
                  </li>
                  <li><strong>할인율 관리 가이드라인 수립</strong>
                    <ul>
                      <li>백화점 10~15%, 직영점 10~12%, 아울렛 30~35%</li>
                      <li>매장별 월간 할인율 모니터링 체계 구축</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            <div className="right">
              <div className="box box-green">
                <div className="box-title green">🎯 중장기 전략 (상반기)</div>
                <ul>
                  <li><strong>WOMEN 포트폴리오 다각화</strong>
                    <ul>
                      <li>DOWN 중심 + BOTTOM/OUTER 성장 카테고리 동반 투자</li>
                      <li>토드백 등 ACC 확대로 토탈 라이프스타일 브랜드 전환</li>
                    </ul>
                  </li>
                  <li><strong>온라인 채널 포트폴리오 재편</strong>
                    <ul>
                      <li>온라인 비중 현 20.6% → 목표 35% 확대</li>
                      <li>네이버스토어 투자 확대(직접이익률 48.0%, 제휴몰 최고 효율)</li>
                      <li>제휴몰 유통수수료 전면 재협상(현 30.7% → 28% 이하 목표)</li>
                    </ul>
                  </li>
                  <li><strong>사계절 아이템 확대</strong>
                    <ul>
                      <li>하절기 최저 1,258백만원 개선 → 여름 라인업 확대</li>
                      <li>반팔다운, 반팔티셔츠 등 SS 아이템 포트폴리오 강화</li>
                      <li>기능성·온도조절 제품 개발로 기후 리스크 대응</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="box box-dark">
                <div className="box-title" style={{ color: "white" }}>📌 1Q 핵심 KPI 목표</div>
                <table style={{ marginTop: "5px", color: "white", fontSize: "8px" }}>
                  <tbody>
                    <tr style={{ borderBottom: "1px solid #4a5568" }}>
                      <th style={{ background: "transparent", color: "#a0aec0", border: "none" }}>지표</th>
                      <th className="num" style={{ background: "transparent", color: "#a0aec0", border: "none" }}>현재</th>
                      <th className="num" style={{ background: "transparent", color: "#a0aec0", border: "none" }}>목표</th>
                      <th className="num" style={{ background: "transparent", color: "#a0aec0", border: "none" }}>Gap</th>
                    </tr>
                    <tr style={{ borderBottom: "1px solid #4a5568" }}>
                      <td style={{ color: "#e2e8f0", border: "none" }}>영업이익률</td>
                      <td className="num" style={{ border: "none" }}>13.6%</td>
                      <td className="num" style={{ border: "none" }}><strong>15.0%</strong></td>
                      <td className="num" style={{ border: "none", color: "#48bb78" }}>+1.4%p</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid #4a5568" }}>
                      <td style={{ color: "#e2e8f0", border: "none" }}>할인율</td>
                      <td className="num" style={{ border: "none" }}>24.4%</td>
                      <td className="num" style={{ border: "none" }}><strong>20.0%</strong></td>
                      <td className="num" style={{ border: "none", color: "#48bb78" }}>-4.4%p</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid #4a5568" }}>
                      <td style={{ color: "#e2e8f0", border: "none" }}>25F 판매율</td>
                      <td className="num" style={{ border: "none" }}>47.7%</td>
                      <td className="num" style={{ border: "none" }}><strong>55%</strong></td>
                      <td className="num" style={{ border: "none", color: "#48bb78" }}>+7.3%p</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid #4a5568" }}>
                      <td style={{ color: "#e2e8f0", border: "none" }}>MEN 매출 비중</td>
                      <td className="num" style={{ border: "none" }}>23%</td>
                      <td className="num" style={{ border: "none" }}><strong>30%</strong></td>
                      <td className="num" style={{ border: "none", color: "#48bb78" }}>+7%p</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid #4a5568" }}>
                      <td style={{ color: "#e2e8f0", border: "none" }}>25F M/U</td>
                      <td className="num" style={{ border: "none" }}>5.51</td>
                      <td className="num" style={{ border: "none" }}><strong>5.50↑</strong></td>
                      <td className="num" style={{ border: "none", color: "#48bb78" }}>유지</td>
                    </tr>
                    <tr>
                      <td style={{ color: "#e2e8f0", border: "none" }}>2월 예상매출</td>
                      <td className="num" style={{ border: "none" }}>-</td>
                      <td className="num" style={{ border: "none" }}><strong>26.5억</strong></td>
                      <td className="num" style={{ border: "none", color: "#a0aec0" }}>-</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="box box-blue">
                <div className="box-title blue">📝 경영진 핵심 메시지</div>
                <div style={{ fontSize: "8px", lineHeight: "1.45" }}>
                  1월 실판매출 3,833백만원(YoY 165%)으로 전년 대비 <strong>폭발적 성장</strong>을 달성하며, FW누적 영업이익 18억(전년비 +56억)으로 <strong>흑자 전환</strong>에 성공했습니다.
                  <strong>WOMEN DOWN 판매율 62.1%</strong>의 성공 모델을 MEN 라인에 적용하고, <strong>다운점퍼 의존도(83.7%)</strong> 완화를 위한 카테고리 다변화가 핵심 과제입니다.
                  온라인 채널에서는 <strong>자사몰(이익률 69.0%)</strong> 확대와 <strong>제휴몰 수수료 구조 개선</strong>을 통해 수익성 극대화를 추진해야 합니다.
                </div>
              </div>
            </div>
          </div>

          <hr className="divider" />

          {/* 2. Executive Summary */}
          <div className="page-title" id="sec2">2. Executive Summary - 핵심 실적, KPI, 주요 이슈 요약</div>

          <div className="section">
            <div className="section-title">📊 핵심 경영 지표</div>
            <div className="kpi-grid">
              <div className="kpi-box">
                <div className="kpi-label">실판매출 (사입제외)</div>
                <div className="kpi-value">3,833<span style={{ fontSize: "9px" }}>백만원</span></div>
                <div className="kpi-change up">▲ YoY 165% (+1,508백만원)</div>
              </div>
              <div className="kpi-box">
                <div className="kpi-label">영업이익</div>
                <div className="kpi-value">473<span style={{ fontSize: "9px" }}>백만원</span></div>
                <div className="kpi-change up">▲ 흑자전환 (+478백만원)</div>
              </div>
              <div className="kpi-box">
                <div className="kpi-label">영업이익률</div>
                <div className="kpi-value">13.6%</div>
                <div className="kpi-change up">▲ +13.8%p (전년 -0.2%)</div>
              </div>
              <div className="kpi-box">
                <div className="kpi-label">할인율</div>
                <div className="kpi-value text-green">24.4%</div>
                <div className="kpi-change up">▲ -21.7%p (전년 46.1%)</div>
              </div>
            </div>
            <div className="kpi-grid" style={{ marginTop: "5px" }}>
              <div className="kpi-box">
                <div className="kpi-label">직접이익률</div>
                <div className="kpi-value">34.1%</div>
                <div className="kpi-change up">▲ +10.7%p (전년 23.4%)</div>
              </div>
              <div className="kpi-box">
                <div className="kpi-label">매출원가율</div>
                <div className="kpi-value">20.6%</div>
                <div className="kpi-change up">▼ -3.7%p (전년 24.3%)</div>
              </div>
              <div className="kpi-box">
                <div className="kpi-label">점당매출</div>
                <div className="kpi-value">101<span style={{ fontSize: "9px" }}>백만원</span></div>
                <div className="kpi-change up">▲ YoY 142%</div>
              </div>
              <div className="kpi-box">
                <div className="kpi-label">인당매출</div>
                <div className="kpi-value">174<span style={{ fontSize: "9px" }}>백만원</span></div>
                <div className="kpi-change up">▲ YoY 157%</div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="left">
              <div className="section">
                <div className="section-title">📈 채널별 실적 요약</div>
                <table>
                  <tbody>
                    <tr><th>채널</th><th className="num">매출</th><th className="num">YoY</th><th className="num">이익률</th><th className="num">비중</th></tr>
                    <tr><td>백화점</td><td className="num">2,049</td><td className="num"><span className="badge-up">252%</span></td><td className="num">32.8%</td><td className="num">53.4%</td></tr>
                    <tr><td>아울렛</td><td className="num">709</td><td className="num"><span className="badge-down">91%</span></td><td className="num">39.3%</td><td className="num">18.5%</td></tr>
                    <tr className="highlight-row"><td><strong>제휴몰</strong></td><td className="num"><strong>494</strong></td><td className="num"><span className="badge-up">103%</span></td><td className="num">41.7%</td><td className="num">12.9%</td></tr>
                    <tr className="highlight-row"><td><strong>자사몰</strong></td><td className="num"><strong>296</strong></td><td className="num"><span className="badge-up">365%</span></td><td className="num">69.0%</td><td className="num">7.7%</td></tr>
                    <tr><td>직영점</td><td className="num">286</td><td className="num"><span className="badge-up">164%</span></td><td className="num">37.9%</td><td className="num">7.5%</td></tr>
                  </tbody>
                </table>
              </div>

              <div className="section">
                <div className="section-title">🏷️ 아이템별 실적 요약</div>
                <table>
                  <tbody>
                    <tr><th>카테고리</th><th className="num">매출</th><th className="num">YoY</th><th className="num">비중</th></tr>
                    <tr className="highlight-row"><td><strong>25F 의류</strong></td><td className="num"><strong>2,617</strong></td><td className="num"><span className="badge-up">215%</span></td><td className="num">68.3%</td></tr>
                    <tr><td>과시즌 의류</td><td className="num">785</td><td className="num"><span className="badge-down">98%</span></td><td className="num">20.5%</td></tr>
                    <tr><td>신발</td><td className="num">139</td><td className="num"><span className="badge-up">177%</span></td><td className="num">3.6%</td></tr>
                    <tr><td>차기시즌 의류</td><td className="num">138</td><td className="num"><span className="badge-up">129%</span></td><td className="num">3.6%</td></tr>
                    <tr><td>가방</td><td className="num">58</td><td className="num"><span className="badge-up">166%</span></td><td className="num">1.5%</td></tr>
                    <tr><td>25S 의류</td><td className="num">52</td><td className="num"><span className="badge-down">85%</span></td><td className="num">1.4%</td></tr>
                    <tr><td>모자</td><td className="num">25</td><td className="num"><span className="badge-up">110%</span></td><td className="num">0.7%</td></tr>
                    <tr><td>기타ACC</td><td className="num">19</td><td className="num"><span className="badge-up">295%</span></td><td className="num">0.5%</td></tr>
                  </tbody>
                </table>
              </div>

              <div className="section">
                <div className="section-title">🏪 운영 효율</div>
                <table>
                  <tbody>
                    <tr><th>지표</th><th className="num">실적</th><th className="num">증감</th></tr>
                    <tr><td>매장수</td><td className="num">30개</td><td className="num text-green">+5개</td></tr>
                    <tr><td>점당매출</td><td className="num">101백만</td><td className="num text-green">+42%</td></tr>
                    <tr><td>인원수</td><td className="num">22명</td><td className="num text-green">+1명</td></tr>
                    <tr><td>인당매출</td><td className="num">174백만</td><td className="num text-green">+57%</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="right">
              <div className="box box-red">
                <div className="box-title red">🔴 Critical Risk</div>
                <ul>
                  <li><strong>성별 불균형 심화</strong> WOMEN 77% vs MEN 23% — MEN 매출 확대 시급</li>
                  <li><strong>다운점퍼 의존도 과다</strong> 83.7%로 계절적/기후 변화에 취약한 구조</li>
                  <li><strong>가방 재고 급증</strong> 재고주수 143.6주(전년 53.1주), TAG 23.0억(351%)</li>
                  <li><strong>아울렛 역성장</strong> YoY 91%(-9%), 직접이익률 39.3%이나 매출 감소</li>
                  <li><strong>SSF샵 매출 급감</strong> MTH YoY -70.5%, 제휴몰 내 최대 매장 부진</li>
                </ul>
              </div>

              <div className="box box-green">
                <div className="box-title green">🟢 Positive Signal</div>
                <ul>
                  <li><strong>흑자전환 달성</strong> 영업이익 473백만원, 전년 -5백만원에서 +478백만원</li>
                  <li><strong>FW 누적 영업이익 18억</strong> 전년비 +56억, 강력한 수익성 개선</li>
                  <li><strong>자사몰 YoY 365%</strong> 직접이익률 69.0%, 최고 수익 채널</li>
                  <li><strong>백화점 YoY 252%</strong> 매출 2,049백만원, 비중 53.4%로 성장 견인</li>
                  <li><strong>할인율 대폭 개선</strong> 24.4%(전년 46.1%, -21.7%p) 정가 판매력 강화</li>
                  <li><strong>25F 판매율 47.7%</strong> 전년 39.1% 대비 +8.6%p, DJ 58.2%(+9.3%p)</li>
                </ul>
              </div>

              <div className="box box-blue">
                <div className="box-title blue">💡 1월 Key Point</div>
                <ul>
                  <li>25F 의류가 매출의 68.3% 차지, YoY 215%로 핵심 성장 동력</li>
                  <li>여성 다운점퍼 판매율 62.1%로 전년비 +9.3%p — 성공 모델 확보</li>
                  <li>매출원가율 20.6%(전년 24.3%, -3.7%p) 원가경쟁력 강화</li>
                  <li>영업비율 20.5%(전년 23.6%, -3.1%p) 비용 효율화 달성</li>
                  <li>25FW 생산원가율 16.8%(전년 18.2%) 원부자재/공임 절감 효과</li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="divider" />

          {/* 3. 채널별 상세 분석 */}
          <div className="page-title" id="sec3">3. 채널별 상세 분석 - 고성장 vs 부진 채널, 온라인 수익구조</div>

          <div className="container">
            <div className="left">
              <div className="section">
                <div className="section-title">🚀 고성장 채널 분석</div>
                <div className="box box-green" style={{ marginBottom: "5px" }}>
                  <div className="box-title green">자사몰 — YoY 365%, 이익률 69.0%</div>
                  <ul>
                    <li>매출 296백만원, 할인율 12.3%(전년 29.2%, <strong>-16.8%p</strong>)</li>
                    <li>유통수수료 부담 0% → 매출 증가가 곧바로 이익 전환</li>
                    <li>카페24 폐쇄 후 온라인쇼핑몰(직) 통합 효과로 L12M +226.9%</li>
                    <li style={{ color: "#276749" }}><strong>→ 자사몰 트래픽 확대 및 브랜드 직접 프로모션 강화</strong></li>
                  </ul>
                </div>
                <div className="box box-green" style={{ marginBottom: "5px" }}>
                  <div className="box-title green">백화점 — YoY 252%, 이익률 32.8%</div>
                  <ul>
                    <li>매출 2,049백만원, 비중 53.4%로 최대 채널</li>
                    <li>할인율 12.9%(전년 34.8%, <strong>-21.9%p</strong>) 대폭 개선</li>
                    <li>신세계강남 257백만(신규), 현대본점 141백만(+110.4%) 성장 견인</li>
                    <li>현대중동 YoY +447.1%, 롯데대구 +87.8% 고성장</li>
                  </ul>
                </div>
                <div className="box box-green" style={{ marginBottom: "5px" }}>
                  <div className="box-title green">직영점 — YoY 164%, 이익률 37.9%</div>
                  <ul>
                    <li>매출 286백만원, 스타필드하남 173백만원(채널 60.7%)</li>
                    <li>스타필드수원 직접이익 148.8% 증가, 할인율 -20.3%p 개선</li>
                    <li>단일 매장 의존도 심화 → 수원 등 추가 매장 육성 필요</li>
                  </ul>
                </div>
              </div>

              <div className="section">
                <div className="section-title">⚠️ 부진/리스크 채널 분석</div>
                <div className="box box-red" style={{ marginBottom: "5px" }}>
                  <div className="box-title red">아울렛 — YoY 91%, 유일한 역성장</div>
                  <ul>
                    <li>매출 709백만원(-68백만), 전월비 -319백만원(-31.0%)</li>
                    <li>현대아울렛김포 단일 매장 의존도 38.8% → 구조적 리스크</li>
                    <li>할인율 48.4%(전년 55.6%) 여전히 높은 수준</li>
                    <li style={{ color: "#c53030" }}><strong>→ 김포 의존도 완화, 여주/이천 거점 매장 육성</strong></li>
                  </ul>
                </div>
                <div className="box box-yellow" style={{ marginBottom: "5px" }}>
                  <div className="box-title yellow">제휴몰 — YoY 103%, 성장 정체</div>
                  <ul>
                    <li>매출 494백만원, 이익률 41.7%이나 성장 둔화</li>
                    <li>SSF샵 YoY -70.4%(214백만원 감소) — 유일한 역성장 매장</li>
                    <li>무신사 수수료율 37.6%(제휴몰 내 최고) → 이익률 33.8% 최저</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="right">
              <div className="section">
                <div className="section-title">🌐 온라인 수익구조 분석 (자사몰 vs 제휴몰)</div>
                <table>
                  <tbody>
                    <tr><th>구분</th><th className="num">자사몰</th><th className="num">제휴몰</th><th className="num">격차</th></tr>
                    <tr><td>L12M 매출</td><td className="num">1,850</td><td className="num">5,527</td><td className="num">3.0배</td></tr>
                    <tr><td>L12M 매출YoY</td><td className="num text-green">226.9%</td><td className="num text-green">139.6%</td><td className="num">+87.3%p</td></tr>
                    <tr><td>L12M 직접이익률</td><td className="num text-green">66.7%</td><td className="num">41.0%</td><td className="num text-green">+25.7%p</td></tr>
                    <tr><td>유통수수료율</td><td className="num text-green">0.0%</td><td className="num text-red">30.7%</td><td className="num">-</td></tr>
                    <tr><td>L12M 할인율</td><td className="num">24.3%</td><td className="num text-red">43.8%</td><td className="num">+19.5%p</td></tr>
                    <tr style={{ background: "#e6fffa" }}><td>MTH 이익률</td><td className="num"><strong>69.0%</strong></td><td className="num">41.7%</td><td className="num text-green"><strong>+27.3%p</strong></td></tr>
                  </tbody>
                </table>
              </div>

              <div className="section">
                <div className="section-title">🏬 제휴몰 매장별 수익구조</div>
                <table>
                  <tbody>
                    <tr><th>매장명</th><th className="num">이익률</th><th className="num">수수료율</th><th className="num">할인율</th></tr>
                    <tr className="success-row"><td>네이버스토어</td><td className="num"><strong>48.0%</strong></td><td className="num">29.3%</td><td className="num">36.3%</td></tr>
                    <tr className="success-row"><td>더카트골프</td><td className="num">45.1%</td><td className="num">26.2%</td><td className="num">55.6%</td></tr>
                    <tr><td>롯데ON</td><td className="num">41.0%</td><td className="num">26.8%</td><td className="num">34.5%</td></tr>
                    <tr><td>SI빌리지</td><td className="num">40.9%</td><td className="num">29.2%</td><td className="num">46.3%</td></tr>
                    <tr><td>SSG닷컴</td><td className="num">40.2%</td><td className="num">28.6%</td><td className="num">38.8%</td></tr>
                    <tr><td>SSF샵</td><td className="num">40.1%</td><td className="num">31.6%</td><td className="num">45.9%</td></tr>
                    <tr className="danger-row"><td>무신사</td><td className="num"><strong>33.8%</strong></td><td className="num text-red">37.6%</td><td className="num">40.2%</td></tr>
                  </tbody>
                </table>
              </div>

              <div className="insight-box">
                <div className="insight-title">💡 온라인 채널 전략 인사이트</div>
                <ul>
                  <li><strong>자사몰</strong>: 수수료 0%, 할인율 12.3%로 수익성 압도적 — 풀프라이스+VIP 채널 포지셔닝</li>
                  <li><strong>네이버</strong>: 제휴몰 내 최고 이익률 48.0% — SKU 30% 확대, 검색광고 투자</li>
                  <li><strong>무신사</strong>: 수수료 37.6%(최고) → 재협상 실패 시 투입 30% 축소, 자사몰 전환 유도</li>
                  <li><strong>SSF샵</strong>: MTH -70.5% 급감 → 수수료 재협상(목표 28%) 및 독점 상품 투입</li>
                </ul>
              </div>

              <div className="section" style={{ marginTop: "6px" }}>
                <div className="section-title">📊 채널별 할인율 변화 (전년 → 당해)</div>
                <table>
                  <tbody>
                    <tr><th>채널</th><th className="num">전년</th><th className="num">당해</th><th className="num">증감</th></tr>
                    <tr className="success-row"><td>백화점</td><td className="num">34.8%</td><td className="num">12.9%</td><td className="num text-green"><strong>-21.9%p</strong></td></tr>
                    <tr className="success-row"><td>직영점</td><td className="num">28.1%</td><td className="num">9.0%</td><td className="num text-green"><strong>-19.1%p</strong></td></tr>
                    <tr className="success-row"><td>자사몰</td><td className="num">29.2%</td><td className="num">12.3%</td><td className="num text-green"><strong>-16.9%p</strong></td></tr>
                    <tr className="success-row"><td>제휴몰</td><td className="num">49.9%</td><td className="num">29.1%</td><td className="num text-green"><strong>-20.8%p</strong></td></tr>
                    <tr><td>아울렛</td><td className="num">55.6%</td><td className="num">48.4%</td><td className="num text-green">-7.2%p</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <hr className="divider" />

          {/* 4. 상품/재고 분석 */}
          <div className="page-title" id="sec4">4. 상품/재고 분석 - 아이템별 성과, 시즌 판매율, 재고 리스크, 원가율 분석</div>

          <div className="container">
            <div className="left">
              <div className="section">
                <div className="section-title">📈 25F 의류 판매율 분석</div>
                <table>
                  <tbody>
                    <tr><th>아이템</th><th className="num">판매율</th><th className="num">전년</th><th className="num">증감</th></tr>
                    <tr className="success-row"><td><strong>다운점퍼</strong></td><td className="num"><strong>58.2%</strong></td><td className="num">45.8%</td><td className="num text-green">+12.4%p</td></tr>
                    <tr><td>반팔다운</td><td className="num">47.6%</td><td className="num">83.5%</td><td className="num text-red">-35.9%p</td></tr>
                    <tr><td>팬츠</td><td className="num">27.6%</td><td className="num">18.0%</td><td className="num text-green">+9.6%p</td></tr>
                    <tr><td>니트풀오버</td><td className="num">16.3%</td><td className="num">26.3%</td><td className="num text-red">-10.0%p</td></tr>
                    <tr><td>방풍자켓</td><td className="num">13.6%</td><td className="num">38.4%</td><td className="num text-red">-24.8%p</td></tr>
                    <tr className="total-row"><td><strong>전체</strong></td><td className="num"><strong>47.7%</strong></td><td className="num">39.1%</td><td className="num text-green"><strong>+8.6%p</strong></td></tr>
                  </tbody>
                </table>
              </div>

              <div className="section">
                <div className="section-title">🎯 25F M/U (마크업) 분석</div>
                <table>
                  <tbody>
                    <tr><th>아이템</th><th className="num">M/U</th><th className="num">전년</th><th className="num">증감</th></tr>
                    <tr><td>반팔다운</td><td className="num">6.52</td><td className="num">6.60</td><td className="num text-red">-0.08</td></tr>
                    <tr><td>다운점퍼</td><td className="num">5.98</td><td className="num">5.24</td><td className="num text-green">+0.74</td></tr>
                    <tr><td>니트풀오버</td><td className="num">4.73</td><td className="num">4.57</td><td className="num text-green">+0.16</td></tr>
                    <tr><td>방풍자켓</td><td className="num">4.59</td><td className="num">4.81</td><td className="num text-red">-0.22</td></tr>
                    <tr><td>팬츠</td><td className="num">4.02</td><td className="num">3.78</td><td className="num text-green">+0.24</td></tr>
                    <tr className="total-row"><td><strong>전체</strong></td><td className="num"><strong>5.51</strong></td><td className="num">4.92</td><td className="num text-green"><strong>+0.59</strong></td></tr>
                  </tbody>
                </table>
              </div>

              <div className="section">
                <div className="section-title">📦 기말재고 현황 (TAG 기준)</div>
                <table>
                  <tbody>
                    <tr><th>카테고리</th><th className="num">재고</th><th className="num">YoY</th></tr>
                    <tr><td>과시즌 의류</td><td className="num">17,020백만</td><td className="num">114%</td></tr>
                    <tr><td>25F 의류</td><td className="num">16,623백만</td><td className="num">131%</td></tr>
                    <tr><td>25S 의류</td><td className="num">6,611백만</td><td className="num">102%</td></tr>
                    <tr><td>차기시즌 의류</td><td className="num">5,394백만</td><td className="num">146%</td></tr>
                    <tr className="danger-row"><td><strong>가방</strong></td><td className="num"><strong>2,297백만</strong></td><td className="num text-red"><strong>351%</strong></td></tr>
                    <tr><td>신발</td><td className="num">1,109백만</td><td className="num text-green">70%</td></tr>
                    <tr><td>모자</td><td className="num">559백만</td><td className="num text-green">83%</td></tr>
                    <tr><td>기타ACC</td><td className="num">401백만</td><td className="num">185%</td></tr>
                    <tr className="total-row"><td><strong>합계</strong></td><td className="num"><strong>500.1억</strong></td><td className="num"><strong>122%</strong></td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="right">
              <div className="section">
                <div className="section-title">🏭 25FW 시즌별 원가율 분석 (글로벌 물량 기준)</div>
                <table>
                  <tbody>
                    <tr><th>카테고리</th><th className="num">원가율</th><th className="num">24F대비</th><th className="num">평균TAG</th><th className="num">매출비중</th></tr>
                    <tr className="success-row"><td>BAG</td><td className="num">16.4%</td><td className="num text-green">-6.3%p</td><td className="num">390,000</td><td className="num">1.5%</td></tr>
                    <tr><td>OUTER</td><td className="num">17.3%</td><td className="num text-green">-2.6%p</td><td className="num">1,105,442</td><td className="num">68.3%</td></tr>
                    <tr className="total-row"><td><strong>전체</strong></td><td className="num"><strong>18.1%</strong></td><td className="num text-green"><strong>-2.2%p</strong></td><td className="num">777,910</td><td className="num">100%</td></tr>
                    <tr><td>HEADWEAR</td><td className="num">18.2%</td><td className="num text-red">+0.3%p</td><td className="num">188,571</td><td className="num">0.7%</td></tr>
                    <tr><td>ACC_ETC</td><td className="num">19.8%</td><td className="num text-green">-0.1%p</td><td className="num">238,000</td><td className="num">0.5%</td></tr>
                    <tr><td>INNER</td><td className="num">22.1%</td><td className="num text-red">+0.3%p</td><td className="num">341,108</td><td className="num">4.0%</td></tr>
                    <tr><td>BOTTOM</td><td className="num">24.8%</td><td className="num text-green">-1.5%p</td><td className="num">333,053</td><td className="num">1.9%</td></tr>
                  </tbody>
                </table>
              </div>

              <div className="section">
                <div className="section-title">📊 아이템별 직접이익 분석</div>
                <table>
                  <tbody>
                    <tr><th>카테고리</th><th className="num">이익</th><th className="num">YoY</th><th className="num">이익률</th></tr>
                    <tr className="highlight-row"><td><strong>25F 의류</strong></td><td className="num"><strong>900</strong></td><td className="num"><span className="badge-up">269%</span></td><td className="num">37.8%</td></tr>
                    <tr><td>과시즌 의류</td><td className="num">294</td><td className="num"><span className="badge-up">108%</span></td><td className="num">41.1%</td></tr>
                    <tr><td>차기시즌 의류</td><td className="num">50</td><td className="num"><span className="badge-up">176%</span></td><td className="num">39.6%</td></tr>
                    <tr><td>신발</td><td className="num">42</td><td className="num"><span className="badge-up">210%</span></td><td className="num">33.5%</td></tr>
                    <tr><td>가방</td><td className="num">22</td><td className="num"><span className="badge-up">237%</span></td><td className="num">41.2%</td></tr>
                    <tr><td>25S 의류</td><td className="num">14</td><td className="num"><span className="badge-down">90%</span></td><td className="num">29.9%</td></tr>
                    <tr><td>모자</td><td className="num">10</td><td className="num"><span className="badge-up">137%</span></td><td className="num">42.3%</td></tr>
                    <tr><td>기타ACC</td><td className="num">8</td><td className="num"><span className="badge-up">427%</span></td><td className="num">46.6%</td></tr>
                  </tbody>
                </table>
              </div>

              <div className="box box-red">
                <div className="box-title red">⚠️ ACC 재고 리스크</div>
                <table style={{ fontSize: "7.5px" }}>
                  <tbody>
                    <tr><th>아이템</th><th className="num">재고주수</th><th className="num">전년</th><th className="num">판단</th></tr>
                    <tr className="danger-row"><td><strong>가방</strong></td><td className="num text-red"><strong>143.6주</strong></td><td className="num">53.1주</td><td className="num"><span className="badge-down">위험</span></td></tr>
                    <tr className="warn-row"><td>기타ACC</td><td className="num">74.3주</td><td className="num">69.8주</td><td className="num"><span className="badge-warn">주의</span></td></tr>
                    <tr className="warn-row"><td>모자</td><td className="num">71.6주</td><td className="num">71.4주</td><td className="num"><span className="badge-warn">주의</span></td></tr>
                    <tr className="success-row"><td>신발</td><td className="num text-green">29.1주</td><td className="num">62.3주</td><td className="num"><span className="badge-up">양호</span></td></tr>
                    <tr className="total-row"><td><strong>평균</strong></td><td className="num"><strong>64.8주</strong></td><td className="num">62.2주</td><td className="num">+2.6주</td></tr>
                  </tbody>
                </table>
                <div style={{ fontSize: "7.5px", marginTop: "4px", color: "#c53030" }}>
                  ※ 26N 선입고 10.7억(토리아나 8.2억+사비아노 외 2.5억) → 전년보다 입고시점 빨라짐<br />
                  ※ 26S ACC 목표: 판매율 60%, 8월말 35주 관리 목표
                </div>
              </div>

              <div className="insight-box">
                <div className="insight-title">💡 상품 전략 인사이트</div>
                <ul>
                  <li><strong>원가 경쟁력 강화</strong>: 25FW 전체 원가율 18.1%(24F대비 -2.2%p), OUTER 17.3%(-2.6%p)로 개선</li>
                  <li><strong>TOP 상품</strong>: 알로로 벨벳(매출 1,617백만, 판매율 83.6%), 소바라(928백만, 83.2%)</li>
                  <li><strong>재고 우려</strong>: 마라테아 미드 판매율 60.8%(TOP10 중 최저), 재고 328백만원</li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="divider" />

          {/* 5. 매장 효율성 */}
          <div className="page-title" id="sec5">5. 매장 효율성 - TOP5/Bottom5 매장, 저수익 매장, 클로징 검토 대상</div>

          <div className="container">
            <div className="left">
              <div className="section">
                <div className="section-title">🏆 직접이익 TOP 10 매장</div>
                <table>
                  <tbody>
                    <tr><th>#</th><th>매장명</th><th className="num">이익</th><th className="num">YoY</th><th className="num">이익률</th></tr>
                    <tr className="success-row"><td>1</td><td><strong>온라인쇼핑몰(직)</strong></td><td className="num"><strong>186</strong></td><td className="num">373%</td><td className="num"><strong>69.0%</strong></td></tr>
                    <tr className="success-row"><td>2</td><td>현대아울렛김포(직)</td><td className="num">134</td><td className="num">110%</td><td className="num">53.8%</td></tr>
                    <tr><td>3</td><td>신세계아울렛여주(직)</td><td className="num">82</td><td className="num">195%</td><td className="num">49.0%</td></tr>
                    <tr><td>4</td><td>신세계강남</td><td className="num">78</td><td className="num"><span className="badge-new">신규</span></td><td className="num">33.3%</td></tr>
                    <tr><td>5</td><td>네이버스토어(제휴몰)</td><td className="num">74</td><td className="num"><span className="badge-new">신규</span></td><td className="num">41.1%</td></tr>
                    <tr><td>6</td><td>스타필드하남(직)</td><td className="num">67</td><td className="num">195%</td><td className="num">42.8%</td></tr>
                    <tr><td>7</td><td>신세계타임스퀘어</td><td className="num">62</td><td className="num"><span className="badge-new">신규</span></td><td className="num">38.3%</td></tr>
                    <tr><td>8</td><td>롯데월드타워</td><td className="num">55</td><td className="num">165%</td><td className="num">34.3%</td></tr>
                    <tr><td>9</td><td>현대무역</td><td className="num">43</td><td className="num"><span className="badge-new">신규</span></td><td className="num">33.9%</td></tr>
                    <tr><td>10</td><td>현대본점</td><td className="num">43</td><td className="num">461%</td><td className="num">33.3%</td></tr>
                  </tbody>
                </table>
              </div>

              <div className="section">
                <div className="section-title">📊 채널별 점당매출</div>
                <table>
                  <tbody>
                    <tr><th>채널</th><th className="num">매장수</th><th className="num">점당매출</th><th className="num">YoY</th></tr>
                    <tr><td>백화점</td><td className="num">20개(+4)</td><td className="num">102백만</td><td className="num text-green">200%</td></tr>
                    <tr><td>직영점</td><td className="num">3개(+1)</td><td className="num">95백만</td><td className="num text-green">109%</td></tr>
                    <tr><td>아울렛</td><td className="num">7개(-)</td><td className="num">101백만</td><td className="num text-red">91%</td></tr>
                    <tr className="total-row"><td><strong>TOTAL</strong></td><td className="num"><strong>30개(+5)</strong></td><td className="num"><strong>101백만</strong></td><td className="num text-green"><strong>142%</strong></td></tr>
                  </tbody>
                </table>
              </div>

              <div className="box box-green">
                <div className="box-title green">✅ TOP 매장 성공 요인</div>
                <ul>
                  <li><strong>온라인쇼핑몰(직)</strong>: 임대료 0원, 물류비·카드수수료만 부담 → 이익률 69.0% 독보적</li>
                  <li><strong>아울렛(직)</strong>: 김포·여주 임대료율 10~13%로 매출 대비 효율적 운영</li>
                  <li><strong>백화점 프리미엄</strong>: 신세계강남·타임스퀘어, 수수료율 11~17% 관리</li>
                  <li><strong>공통점</strong>: 매출 증가율 &gt; 직접비용 증가율 구조로 이익 레버리지 실현</li>
                </ul>
              </div>
            </div>

            <div className="right">
              <div className="section">
                <div className="section-title">⚠️ 저수익/부진 매장 분석</div>
                <table style={{ fontSize: "7.5px" }}>
                  <tbody>
                    <tr><th>매장명</th><th className="num">이익</th><th className="num">매출YoY</th><th className="num">할인변화</th><th className="num">판단</th></tr>
                    <tr className="danger-row">
                      <td><strong>현대신촌</strong></td><td className="num">5백만</td><td className="num">9.3%</td><td className="num">-22.8%p</td>
                      <td className="num"><span className="badge-down">클로징 검토</span></td>
                    </tr>
                    <tr className="warn-row">
                      <td>커넥트현대청주(직)</td><td className="num">5백만</td><td className="num">-</td><td className="num">31.5%p</td>
                      <td className="num"><span className="badge-new">신규</span></td>
                    </tr>
                    <tr className="success-row">
                      <td>롯데대구</td><td className="num">9백만</td><td className="num">87.8%</td><td className="num">-18.6%p</td>
                      <td className="num"><span className="badge-up">회복</span></td>
                    </tr>
                    <tr className="success-row">
                      <td>스타필드수원(직)</td><td className="num">13백만</td><td className="num">27.5%</td><td className="num">-20.3%p</td>
                      <td className="num"><span className="badge-up">회복</span></td>
                    </tr>
                    <tr>
                      <td>현대천호</td><td className="num">16백만</td><td className="num text-red">-26.7%</td><td className="num">+0.3%p</td>
                      <td className="num"><span className="badge-warn">모니터링</span></td>
                    </tr>
                    <tr className="success-row">
                      <td>현대목동</td><td className="num">20백만</td><td className="num">6.4%</td><td className="num">-34.1%p</td>
                      <td className="num"><span className="badge-up">회복</span></td>
                    </tr>
                    <tr className="success-row">
                      <td>롯데본점</td><td className="num">23백만</td><td className="num">27.9%</td><td className="num">-15.7%p</td>
                      <td className="num"><span className="badge-up">회복</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="box box-red">
                <div className="box-title red">🚨 현대신촌 — 클로징 검토 대상</div>
                <ul>
                  <li>할인율 32.7%→9.9%로 <strong>22.8%p 대폭 축소</strong>했음에도 직접이익 5백만원</li>
                  <li>매출 9.3% 성장이 수익성 개선으로 이어지지 않는 <strong>구조적 문제</strong></li>
                  <li>고정비(임대료+인건비) 대비 매출 효율 부족</li>
                  <li style={{ color: "#c53030" }}><strong>→ 3개월 개선 조치 후 재평가, 미달성 시 상반기 내 클로징</strong></li>
                </ul>
              </div>

              <div className="box box-yellow">
                <div className="box-title yellow">📋 위험 신호 매장</div>
                <ul>
                  <li><strong>SSF샵</strong>: YoY -70.4%, 전월비 -75.1% — MD 전략 전면 재검토 필요</li>
                  <li><strong>더카트골프</strong>: YoY -68.7%, 매출 규모 미미(5백만원) — 채널 정리 검토</li>
                  <li><strong>현대천호</strong>: YoY -26.7%, 매출 부진 지속 — 상권 변화 분석 후 대응</li>
                  <li><strong>현대아울렛김포</strong>: 매출 275백만(채널 38.8%) 성장률 +3.4% 정체</li>
                </ul>
              </div>

              <div className="box box-purple">
                <div className="box-title purple">🔄 회복 가능형 매장 (모범 사례)</div>
                <ul>
                  <li><strong>롯데대구</strong>: 직접이익 <strong>+974.5%</strong>, 할인율 -18.6%p → 성공 공식 확산 추진</li>
                  <li><strong>현대목동</strong>: 할인율 47.4%→13.3%(-34.1%p), 직접이익 +18.6%</li>
                  <li><strong>스타필드수원</strong>: 직접이익 +148.8%, 할인율 -20.3%p — 직영점 모범 사례</li>
                  <li><strong>롯데본점</strong>: 직접이익 +50.6%, 매출 +27.9% — 안정적 수익성 회복</li>
                </ul>
              </div>

              <div className="insight-box">
                <div className="insight-title">💡 매장 전략 핵심 메시지</div>
                <div style={{ fontSize: "7.5px", lineHeight: "1.4" }}>
                  7개 검토 매장 중 <strong>6개 매장이 할인율 정상화</strong>로 수익성 개선 중이며, <strong>현대신촌 1개만 구조적 문제</strong>로 클로징 검토 필요. 롯데대구(+974.5%) 성공 모델의 타 매장 확산이 단기 수익성 개선의 핵심 레버.
                </div>
              </div>
            </div>
          </div>

          <div className="footer">
            DUVETICA 브랜드 2026년 1월 경영 보고서 | F&amp;F Corporation 경영관리팀 FP&amp;A | Confidential
          </div>
        </div>
      </div>

      <a href="#top" className="scroll-top">▲</a>
    </>
  );
}
