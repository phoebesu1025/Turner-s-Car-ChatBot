import main from "../MainContent.module.css";
import styles from "./OnlineAuctions.module.css";
export default function OnlineAuctions() {
  return (
    <>
      <h1>Online auctions</h1>
      <div className={main.contentContainer}>
        <p>
          Online auctions are another wy in which you can bid on auctions from
          the comfort of the Turners' website.
        </p>
        <p style={{ fontWeight: "bold" }}>
          <span>Create</span> an account wit us and use our tools that will make
          buying a car quick and easy like watchlists, saved searches, txt alert
          and more. <span>More information here.</span>
        </p>

        <p>
          It's easy to tell which goods are in online auctions, you can use the
          search feature to filter to online auctions, or simply look for the
          "Online Auction" on results as below
        </p>
        <img src="./images/online-auction-img.png" alt="" />

        <div>
          <p>We have two types of online auctions;</p>
          <ul className={styles.contentUl}>
            <li className={styles.contentLi}>
              <strong>Turners Online Auctions&nbsp;</strong>- similar to above
              but the auctions are&nbsp;only&nbsp;available on the Turners
              website and buyers fees are not included in the amount you're
              bidding. You don't need to link your account to Trade Me.
            </li>
            <li className={styles.contentLi}>
              <strong>Turners Trade Me Auctions</strong> - these auctions are
              held in partnership with Trade Me, you can bid on either the
              Turners or Trade Me website. If you’re a Trade Me user, a lot of
              the bidding process will be familiar to you. To bid on online
              auctions you need to link your Turners account to Trade Me, it’s
              very simple and will only take a minute – and you only need to do
              it once.
            </li>
          </ul>
        </div>

        <p>
          You can tell which type of online auction you're bidding on in the
          listing, see the image below.
        </p>
        <div>
          <img
            src="./images/new-online-auction.png"
            alt=""
            className={styles.newOnlineAuctionImg}
          />
        </div>
      </div>
    </>
  );
}
