import styles from "./styles/Faq1.module.css";
export default function Faq1() {
  return (
    <div class="accordion-content">
      <p>
        If you're set up to bid on Turners Live, you're already set up to bid on
        these auctions. If not, please see the instructions below.
      </p>
      <p>
        <strong>Private customers &amp; companies</strong>
      </p>
      <p className={styles.faqP}>
        -&nbsp;
        <span className={styles.faqSpan}>
          Log into your Turners website account
        </span>
        <span className={styles.faqSpan}>
          &nbsp;
          <br />
          -&nbsp;
        </span>
        <span className={styles.faqSpan}>
          Go to MY ACCOUNT
          <br />
          -&nbsp;
        </span>
        <span className={styles.faqSpan}>
          Click ACCOUNT DETAILS - Edit
          <br />
          -&nbsp;
        </span>
        <span className={styles.faqSpan}>
          Go to the ACCOUNT TYPE section at the bottom of the page and tick the
          box that says BID ONLINE. Oryou will see a red 'BID ONLINE' button on
          the top right hand side
          <br />-
        </span>
        <span className={styles.faqSpan}>
          You will then be prompted to enter your credit card details. To
          authorise your card we need to charge $1 to it, this will be credited
          back onto your card after a couple of days.
        </span>
      </p>
      <p>
        <span className={styles.faqSpan}>
          <br />
        </span>
      </p>
      <p>
        <strong>
          Registered Motor Vehicle Traders, Licensed Second-hand Dealers &amp;
          Licensed Dismantlers
          <br />
          <br />
        </strong>
        <span className={styles.faqSpan}>
          - Log into your Turners website account &nbsp;
          <br />
          -&nbsp;
        </span>
        <span className={styles.faqSpan}>
          Go to MY ACCOUNT
          <br />
          -&nbsp;
        </span>
        <span className={styles.faqSpan}>
          Click ACCOUNT DETAILS - Edit
          <br />
          -&nbsp;
        </span>
        <span className={styles.faqSpan}>
          Click the red 'BID ONLINE' button on the top right hand side
          <br />
          -&nbsp;
        </span>
        <span className={styles.faqSpan}>
          If you can't see the red button you may not be registered with us as a
          licensed dealer. Go to the ACCOUNT TYPE section at the bottom of the
          page and ensure the correct account type is selected, fill in the
          additional details and we will send a General Agreement to Trade form.
          You will need to complete this form to be registered as a dealer
          within our system
        </span>
      </p>
    </div>
  );
}
