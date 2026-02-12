export default function ReportContent() {

  return (
    <>
      {/* 네비게이션 */}
      <div className="nav" id="top">
        <a href="#sec1">🎯 전략 &amp; Action</a>
        <a href="#sec2">📊 Executive Summary</a>
        <a href="#sec3">📈 채널분석</a>
        <a href="#sec4">🏷️ 상품/재고</a>
        <a href="#sec5">🏪 매장효율</a>
      </div>

      {/* 메인 콘텐츠 */}
      <div>
        <div className="wrap">

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
                      <li>당월(26년 1월) 매출 90백만원(YoY -29.5%) 급감 → 원인분석 및 긴급 대응 (전년 할인율 55%, 과시즌 중점판매)</li>
                      <li>무신사 수수료 재협상 착수 (현 33.8% → 목표 기존 29%+리컴퍼니 4%, 25.04~)</li>
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
                      <li>자사몰 매출 비중 7.7% → 15% 확대 목표</li>
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
                      <li>네이버스토어 투자 확대(직접이익률 41.1%, 제휴몰 최고 효율)</li>
                      <li>제휴몰 유통수수료 전면 재협상(현 29.3% → 28.0% 이하 목표)</li>
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
                  <li><strong>SSF샵 매출 급감</strong> 당월 매출 90백만원(YoY 29.5%), 제휴몰 내 최대 매장 부진</li>
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
                    <li>카페24 폐쇄 후 온라인쇼핑몰(직) 통합 효과로 최근 12개월 YoY 192%</li>
                    <li style={{ color: "#276749" }}><strong>→ 자사몰 트래픽 확대 및 브랜드 직접 프로모션 강화</strong></li>
                  </ul>
                </div>
                <div className="box box-green" style={{ marginBottom: "5px" }}>
                  <div className="box-title green">백화점 — YoY 252%, 이익률 32.8%</div>
                  <ul>
                    <li>매출 2,049백만원, 비중 53.4%로 최대 채널</li>
                    <li>할인율 12.9%(전년 34.8%, <strong>-21.9%p</strong>) 대폭 개선</li>
                    <li>신세계강남 257백만(신규), 현대본점 141백만(YoY 209.1%) 성장 견인</li>
                    <li>현대중동 YoY 539%, 롯데대구 188% 고성장</li>
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
                    <li>매출 709백만원(-7백만)</li>
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
                    <li>무신사 수수료율 33.8%(제휴몰 내 최고) → 이익률 37.2% 제휴몰 내 최저</li>
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
                    <tr><td>최근 12개월 매출</td><td className="num">2,035</td><td className="num">6,080</td><td className="num">3.0배</td></tr>
                    <tr><td>최근 12개월 매출YoY</td><td className="num text-green">191.8%</td><td className="num text-green">239.6%</td><td className="num">+47.8%p</td></tr>
                    <tr><td>최근 12개월 직접이익률</td><td className="num text-green">66.7%</td><td className="num">41.0%</td><td className="num text-green">+25.7%p</td></tr>
                    <tr><td>유통수수료율</td><td className="num text-green">0.0%</td><td className="num text-red">30.7%</td><td className="num">-</td></tr>
                    <tr><td>최근 12개월 할인율</td><td className="num">24.3%</td><td className="num text-red">43.8%</td><td className="num">+19.5%p</td></tr>
                    <tr style={{ background: "#e6fffa" }}><td>당월(26년 1월) 이익률</td><td className="num"><strong>69.0%</strong></td><td className="num">41.7%</td><td className="num text-green"><strong>+27.3%p</strong></td></tr>
                  </tbody>
                </table>
              </div>

              <div className="section">
                <div className="section-title">🏬 제휴몰 매장별 수익구조</div>
                <table>
                  <tbody>
                    <tr><th>매장명</th><th className="num">실판매액</th><th className="num">직접이익</th><th className="num">직접이익률</th><th className="num">수수료율</th><th className="num">할인율</th></tr>
                    <tr><td>네이버스토어</td><td className="num">197</td><td className="num">74</td><td className="num">41.1%</td><td className="num">29.8%</td><td className="num">28.5%</td></tr>
                    <tr><td>SSF샵</td><td className="num">90</td><td className="num">32</td><td className="num">39.4%</td><td className="num">30.0%</td><td className="num">34.6%</td></tr>
                    <tr><td>SSG닷컴</td><td className="num">74</td><td className="num">31</td><td className="num">46.5%</td><td className="num">26.5%</td><td className="num">23.7%</td></tr>
                    <tr><td>무신사</td><td className="num">62</td><td className="num">21</td><td className="num">37.2%</td><td className="num">33.8%</td><td className="num">17.4%</td></tr>
                    <tr className="success-row"><td>SI빌리지</td><td className="num">54</td><td className="num">22</td><td className="num">44.4%</td><td className="num"><strong>25.5%</strong></td><td className="num">37.1%</td></tr>
                    <tr><td>롯데ON</td><td className="num">13</td><td className="num">5</td><td className="num">46.4%</td><td className="num">25.6%</td><td className="num">28.4%</td></tr>
                    <tr><td>더카트골프</td><td className="num">5</td><td className="num">2</td><td className="num">48.0%</td><td className="num">26.0%</td><td className="num">48.7%</td></tr>
                  </tbody>
                </table>
              </div>

              <div className="insight-box">
                <div className="insight-title">💡 온라인 채널 전략 인사이트</div>
                <ul>
                  <li><strong>자사몰</strong>: 수수료 0%, 할인율 12.3%로 수익성 압도적 — 풀프라이스+VIP 채널 포지셔닝</li>
                  <li><strong>네이버</strong>: 제휴몰 내 최고 이익률 41.1% — SKU 30% 확대, 검색광고 투자</li>
                  <li><strong>무신사</strong>: 수수료 33.8%(제휴몰 내 최고) → 재협상 실패 시 투입 30% 축소, 자사몰 전환 유도</li>
                  <li><strong>SSF샵</strong>: 당월(26년 1월) -70.5% 급감 → 수수료 재협상(현재 30%, 목표 28%) 및 독점 상품 투입</li>
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
                    <tr><th>#</th><th>매장명</th><th className="num">실판매액</th><th className="num">직접이익</th><th className="num">YoY</th><th className="num">직접이익률</th></tr>
                    <tr className="success-row"><td>1</td><td><strong>온라인쇼핑몰(직)</strong></td><td className="num">296</td><td className="num"><strong>186</strong></td><td className="num">365.4%</td><td className="num"><strong>69.0%</strong></td></tr>
                    <tr className="success-row"><td>2</td><td>현대아울렛김포(직)</td><td className="num">275</td><td className="num">116</td><td className="num">103.3%</td><td className="num">46.3%</td></tr>
                    <tr><td>3</td><td>신세계강남</td><td className="num">257</td><td className="num">78</td><td className="num"><span className="badge-new">신규</span></td><td className="num">33.3%</td></tr>
                    <tr><td>4</td><td>네이버스토어(제휴몰)</td><td className="num">197</td><td className="num">74</td><td className="num"><span className="badge-new">신규</span></td><td className="num">41.1%</td></tr>
                    <tr><td>5</td><td>스타필드하남(직)</td><td className="num">173</td><td className="num">67</td><td className="num">138.6%</td><td className="num">42.8%</td></tr>
                    <tr><td>6</td><td>신세계아울렛여주(직)</td><td className="num">183</td><td className="num">65</td><td className="num">182.0%</td><td className="num">39.3%</td></tr>
                    <tr><td>7</td><td>신세계타임스퀘어</td><td className="num">177</td><td className="num">62</td><td className="num"><span className="badge-new">신규</span></td><td className="num">38.3%</td></tr>
                    <tr><td>8</td><td>롯데월드타워</td><td className="num">177</td><td className="num">55</td><td className="num">142.4%</td><td className="num">34.3%</td></tr>
                    <tr><td>9</td><td>현대무역</td><td className="num">139</td><td className="num">43</td><td className="num"><span className="badge-new">신규</span></td><td className="num">33.9%</td></tr>
                    <tr><td>10</td><td>현대본점</td><td className="num">141</td><td className="num">43</td><td className="num">209.1%</td><td className="num">33.3%</td></tr>
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
                  <li><strong>아울렛(직)</strong>: 김포 임차료율 12.0%, 여주 임차료율 14.6%로 매출 대비 효율적 운영</li>
                  <li><strong>백화점 프리미엄</strong>: 신세계강남, 롯데월드타워 외 유통수수료 27% 미만 관리</li>
                  <li><strong>공통점</strong>: 매출 증가율 &gt; 직접비용 증가율 구조로 이익 레버리지 실현</li>
                </ul>
              </div>
            </div>

            <div className="right">
              <div className="section">
                <div className="section-title">⚠️ 저수익/부진 매장 분석</div>
                <table style={{ fontSize: "7.5px" }}>
                  <tbody>
                    <tr><th>매장명</th><th className="num">실판매액</th><th className="num">이익</th><th className="num">매출YoY</th><th className="num">할인변화</th><th className="num">판단</th></tr>
                    <tr className="warn-row">
                      <td>커넥트현대청주(직)</td><td className="num">21</td><td className="num">-2</td><td className="num"><span className="badge-new">신규</span></td><td className="num">31.5%</td>
                      <td className="num"><span className="badge-warn">모니터링</span></td>
                    </tr>
                    <tr>
                      <td>신세계아울렛제주(직)</td><td className="num">26</td><td className="num">3</td><td className="num">78.8%</td><td className="num">-0.3%p</td>
                      <td className="num"><span className="badge-warn">모니터링</span></td>
                    </tr>
                    <tr className="danger-row">
                      <td><strong>현대신촌</strong></td><td className="num">32</td><td className="num">5</td><td className="num">109.3%</td><td className="num">-22.8%p</td>
                      <td className="num"><span className="badge-down">클로징 검토</span></td>
                    </tr>
                    <tr>
                      <td>롯데인천close</td><td className="num">27</td><td className="num">8</td><td className="num"><span className="badge-new">신규</span></td><td className="num">9.8%</td>
                      <td className="num"><span className="badge-down">팝업폐점 완료</span></td>
                    </tr>
                    <tr className="success-row">
                      <td>롯데대구</td><td className="num">35</td><td className="num">9</td><td className="num">187.8%</td><td className="num">-18.6%p</td>
                      <td className="num"><span className="badge-up">회복</span></td>
                    </tr>
                    <tr className="success-row">
                      <td>스타필드수원(직)</td><td className="num">63</td><td className="num">12</td><td className="num">127.5%</td><td className="num">-20.3%p</td>
                      <td className="num"><span className="badge-up">회복</span></td>
                    </tr>
                    <tr>
                      <td>신세계아울렛시흥(직)</td><td className="num">49</td><td className="num">14</td><td className="num"><span className="badge-new">신규</span></td><td className="num">39.5%</td>
                      <td className="num"><span className="badge-warn">모니터링</span></td>
                    </tr>
                    <tr>
                      <td>현대천호</td><td className="num">70</td><td className="num">16</td><td className="num">73.3%</td><td className="num">+0.3%p</td>
                      <td className="num"><span className="badge-warn">모니터링</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="box box-red">
                <div className="box-title red">🚨 현대신촌 — 클로징 검토 대상</div>
                <ul>
                  <li>할인율 32.7%→9.9%로 <strong>22.8%p 대폭 축소</strong>했음에도 직접이익 5백만원</li>
                  <li>매출 109.3% 성장이 수익성 개선으로 이어지지 않는 <strong>구조적 문제</strong></li>
                  <li>유통수수료 27%, 중간관리 수수료(22%, 최소 6백만원) 대비 효율 부족</li>
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
                </ul>
              </div>

              <div className="insight-box">
                <div className="insight-title">💡 매장 전략 핵심 메시지</div>
                <div style={{ fontSize: "7.5px", lineHeight: "1.4" }}>
                  8개 검토 매장 중 <strong>롯데대구(+187.8%), 스타필드수원(+127.5%) 등 회복 가능형 매장</strong>이 할인율 정상화로 수익성 개선 중이며, <strong>현대신촌 1개만 구조적 문제</strong>로 클로징 검토 필요. 신규 매장(커넥트청주, 신세계시흥) 및 팝업폐점(롯데인천) 모니터링 지속.
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
