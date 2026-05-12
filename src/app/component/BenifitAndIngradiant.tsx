import styles from "../css/Info.module.css";

export default function InfoSection() {
  return (
    <>
      {/* =========================
          HOW IT WORKS SECTION
      ========================= */}

      <section className={styles.workSection} >
        {/* FULL WIDTH TITLE BAR */}
        <div className={styles.titleBar} id="works">
          <h2>How Does ProstaVive™ Work?</h2>
        </div>

        <div className={styles.container}>
          <div className={styles.content}>
            <p className={styles.topText}>
              ProstaVive is specifically formulated to support healthy prostate
              function naturally while improving daily comfort, urinary flow,
              circulation, and overall male wellness. Its advanced blend of
              natural ingredients works together to target the root causes of
              common prostate-related concerns.
            </p>

            <p className={styles.topText}>
              Featuring powerful ingredients like <strong>Ashwagandha</strong>,{" "}
              <strong>Tongkat Ali</strong>, <strong>Nettle Root</strong>, and{" "}
              <strong>Panax Ginseng</strong>, ProstaVive helps support hormone
              balance, healthy inflammation response, and optimal blood flow for
              long-term prostate health.
            </p>

            <ul className={styles.ingredientsList}>
              <li>
                <span>Reduce Prostate Inflammation:</span> Helps ease pressure
                on the urinary tract while supporting better comfort and bladder
                function.
              </li>

              <li>
                <span>Support Hormone Balance:</span> Assists in maintaining
                healthy testosterone levels and reducing frequent urination or
                discomfort.
              </li>

              <li>
                <span>Improve Blood Circulation:</span> Boosts nitric oxide
                production to enhance blood flow and deliver nutrients needed
                for optimal prostate function.
              </li>

              <li>
                <span>Promote Better Urinary Flow:</span> Supports smoother
                bladder emptying and helps reduce nighttime bathroom visits.
              </li>

              <li>
                <span>Increase Energy & Vitality:</span> Helps improve stamina,
                sleep quality, recovery, and overall male performance.
              </li>

              <li>
                <span>Natural Long-Term Support:</span> Provides prostate
                wellness benefits using natural ingredients without harsh side
                effects.
              </li>
            </ul>

            <p className={styles.bottomText}>
              With consistent daily use, many users report improved urinary
              comfort, reduced nighttime interruptions, deeper sleep, increased
              confidence, and renewed vitality. ProstaVive offers a natural
              approach to supporting prostate health so you can feel healthier,
              more active, and more comfortable every day.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.benefitsSection} >
        <div className={styles.titleBar} id="benefits">
          <h2>Benefits of ProstaVive™</h2>
        </div>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionSubtitle}>
              Discover how ProstaVive supports prostate health, urinary comfort,
              energy, circulation, hormone balance, and overall male wellness
              with its natural daily formula.
            </p>
          </div>

          {/* BENEFITS GRID */}
          <div className={styles.benefitsGrid}>
            {/* CARD 1 */}
            <article className={styles.benefitCard}>
              <div className={styles.benefitIcon}>🛡️</div>

              <h3>Supports Prostate Health</h3>

              <p>
                Helps maintain a healthy prostate size while reducing
                inflammation, urinary discomfort, and bladder pressure
                naturally.
              </p>
            </article>

            {/* CARD 2 */}
            <article className={styles.benefitCard}>
              <div className={styles.benefitIcon}>💧</div>

              <h3>Improves Urinary Function</h3>

              <p>
                Promotes smoother urinary flow and better bladder control while
                reducing frequent nighttime bathroom trips.
              </p>
            </article>

            {/* CARD 3 */}
            <article className={styles.benefitCard}>
              <div className={styles.benefitIcon}>🔥</div>

              <h3>Reduces Inflammation</h3>

              <p>
                Natural anti-inflammatory ingredients help soothe the prostate
                gland and improve long-term urinary comfort.
              </p>
            </article>

            {/* CARD 4 */}
            <article className={styles.benefitCard}>
              <div className={styles.benefitIcon}>⚡</div>

              <h3>Boosts Energy & Stamina</h3>

              <p>
                Supports healthy circulation and hormone balance to improve
                energy, endurance, and overall vitality.
              </p>
            </article>

            {/* CARD 5 */}
            <article className={styles.benefitCard}>
              <div className={styles.benefitIcon}>❤️</div>

              <h3>Supports Men’s Vitality</h3>

              <p>
                Ingredients like Tongkat Ali and Panax Ginseng help support
                stamina, confidence, libido, and male performance.
              </p>
            </article>

            {/* CARD 6 */}
            <article className={styles.benefitCard}>
              <div className={styles.benefitIcon}>🌙</div>

              <h3>Improves Sleep Quality</h3>

              <p>
                Helps reduce nighttime urination so you can enjoy deeper and
                more restful sleep every night.
              </p>
            </article>

            {/* CARD 7 */}
            <article className={styles.benefitCard}>
              <div className={styles.benefitIcon}>⚖️</div>

              <h3>Supports Hormone Balance</h3>

              <p>
                Helps regulate hormone levels and supports healthy testosterone
                balance for long-term prostate wellness.
              </p>
            </article>
            {/* CARD 8 */}
            <article className={styles.benefitCard}>
              <div className={styles.benefitIcon}>🩺</div>

              <h3>Supports Heart Health</h3>

              <p>
                Promotes healthy blood circulation, cardiovascular wellness, and
                balanced metabolic function naturally.
              </p>
            </article>

            {/* CARD 9 */}
            <article className={styles.benefitCard}>
              <div className={styles.benefitIcon}>🌿</div>

              <h3>100% Natural Formula</h3>

              <p>
                Made with non-GMO natural ingredients in a certified facility
                for safe, daily, long-term use without harsh side effects.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* =========================
          INGREDIENT SECTION
      ========================= */}

      <section className={styles.ingredientsSection} >
        {/* FULL WIDTH TITLE BAR */}
        <div className={styles.titleBar} id="ingredients">
          <h2>What Are The Ingredients Of ProstaVive™?</h2>
        </div>

        <div className={styles.container}>
          {/* CONTENT */}
          <div className={styles.content}>
            <p className={styles.topText}>
              ProstaVive contains a carefully selected blend of natural
              ingredients chosen for their ability to support prostate health,
              healthy circulation, hormone balance, and overall male wellness.
              Here’s a clear breakdown of each ingredient and how it helps:
            </p>

            <ul className={styles.ingredientsList}>
              <li>
                <span>Magnesium:</span> This mineral helps relax blood vessels,
                supports deeper sleep, and boosts energy and stamina, all of
                which benefit long-term prostate health.
              </li>
              <li>
                <span>Vitamin D:</span> Crucial for prostate function and sexual
                activity, Vitamin D also supports mood, metabolism, and immune
                health.
              </li>
              <li>
                <span>Magnesium:</span> This mineral helps relax blood vessels,
                supports deeper sleep, and boosts energy and stamina, all of
                which benefit long-term prostate health.
              </li>

              <li>
                <span>Vitamin D:</span> Crucial for prostate function and sexual
                activity, Vitamin D also supports mood, metabolism, and immune
                health.
              </li>

              <li>
                <span>Boron:</span> Helps support detoxification and healthy
                inflammation response while promoting overall prostate comfort
                and wellness.
              </li>

              <li>
                <span>Tongkat Ali:</span> Traditionally used to support healthy
                blood circulation, stamina, energy, and male performance.
              </li>

              <li>
                <span>Ashwagandha:</span> Supports stress reduction, hormone
                balance, and long-term prostate wellness naturally.
              </li>

              <li>
                <span>Fenugreek:</span> Helps maintain healthy hormone levels,
                supports vitality, and improves urinary comfort.
              </li>

              <li>
                <span>Panax Ginseng:</span> Promotes circulation, stamina,
                physical energy, and overall male vitality.
              </li>

              <li>
                <span>Maca Root:</span> Traditionally used to support endurance,
                energy levels, and reproductive health.
              </li>

              <li>
                <span>Artichoke Extract:</span> Rich in antioxidants that
                support prostate function and cardiovascular wellness.
              </li>

              <li>
                <span>Nettle Root:</span> Helps support urinary tract health and
                healthy prostate function naturally.
              </li>

              <li>
                <span>Zinc:</span> Essential mineral that supports immune
                function, hormone balance, and prostate wellness.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* =========================
    HOW TO USE SECTION
========================= */}

      <section className={styles.useSection} id="how-to-use">
        {/* FULL WIDTH TITLE BAR */}
        <div className={styles.titleBar}>
          <h2>When & How To Consume ProstaVive™?</h2>
        </div>

        <div className={styles.container}>
          <div className={styles.content}>
            <p className={styles.topText}>
              ProstaVive is designed to fit easily into your daily routine. For
              best results, take the supplement consistently every day as
              directed on the product label. Regular use helps support prostate
              health, healthy urinary function, circulation, and overall male
              vitality over time.
            </p>

            <ul className={styles.ingredientsList}>
              <li>
                <span>Recommended Dosage:</span> Take 2 capsules daily with a
                full glass of water.
              </li>

              <li>
                <span>Best Time To Take:</span> Consume ProstaVive in the
                morning or with your first meal to support energy, circulation,
                and daily wellness.
              </li>

              <li>
                <span>Consistency Matters:</span> Daily use is important for
                optimal prostate support and long-term results.
              </li>

              <li>
                <span>Stay Hydrated:</span> Drinking enough water throughout the
                day may help improve nutrient absorption and urinary comfort.
              </li>

              <li>
                <span>Healthy Lifestyle Support:</span> Pair ProstaVive with
                balanced nutrition, regular activity, and proper sleep for
                better overall wellness.
              </li>

              <li>
                <span>Do Not Exceed Dosage:</span> Always follow the recommended
                serving instructions provided on the product packaging.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
