import React, { useState } from "react";
import "./BodyPart.css";

const Card = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    document.body.classList.add("blur-background");
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.classList.remove("blur-background");
  };

  return (
    <>
      <header className="header">
        <div>
          <h1 className="outlined-text">Firefly</h1>
        </div>
        <div>
          <h1 className="header-heading">
            The choice is yours.
            <br /> Because they don’t have one.
          </h1>
          <button className="header-button" onClick={openModal}>
            QUICK VIEW
          </button>

          {modalOpen && (
            <div className="modal" onClick={closeModal}>
              <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                <span className="close" onClick={closeModal}>
                  &times;
                </span>
                <img
                  src="https://s3-alpha-sig.figma.com/img/493c/498f/deff6a2a3ca22c2735d57bb14d32c57d?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RNkWkiArTNWWKjFUIxQJpIspsLMKHK5l2KY21inmvmA8SAOTtH5dLb7KsBTtH4NtaXN3fhWU3xfnRrydSymngZNuPo6W429UFvsikbho6Sg-dZlhib-eyMqyIDoRFOSsi7Da2sx9E6tdLDY0KiKKQ0YI-8wwxrNT6zrVBN7ZR428KYPdKR65wC2jET0C8vEPm2lKc0hqjvI-BFal4yz42aUMASGE5l2lFXAksbsmurUwMiTojLomme8WX5Hndb7Ra3-qdG-BCE7HGSEwB7qLwxOFEeQr1xP~E7YnPnwiTyNTHHS9PmHotXVT8FrdM2J1-4V0tMEuWyf1mNloamRNkQ__"
                  alt="Ladiyon ki Rani Chani"
                />
              </div>
            </div>
          )}
        </div>
      </header>

      <main className="card">
        <section className="card1">
          <span className="l"></span>
          <h1 className="sub-heading1">About</h1>
          <span className="l"></span>
        </section>
        <section className="card4">
          <p className="para">
            Our products are crafted exclusively from the dreams and screams of
            young kids who wanted to show their mastery in their
            <br /> chosen fields, but were directed towards a factory for daily
            wages. Each cracker bursts brighter than their lost smiles, and can{" "}
            <br />
            be heard louder than their cries for miles. Buy them, burst them,
            brag about them.
          </p>
          <h1>The choice is yours. Because they don’t have one.</h1>
        </section>
        <section className="card1">
          <span className="l"></span>
          <h1 className="sub-heading2">Our Products</h1>
          <span className="l"></span>
        </section>

        {/* two cards */}
        <section className="card2">
          <article className="card3">
            <img
              className="i1"
              src="https://s3-alpha-sig.figma.com/img/22f6/b7b5/b47561aa2ad560235e2702e286a6d4b7?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D1sbiDpivdUXcgrTSSc5RJI2iy3cl2mwuq097Tpi94ZpTu3~CqkJu2CqbmlnwjeiEeUzVqQUUgTZIB0HIJaeAcoUGpYkYgj5iApxpXhBq8jPPpW7Cmtm0saXQFrc0LKUy6XsnG8wxIZHPREhmyuW4LNknYuhHvNm8TprWaYRkGly99XqiTze8Z11IXY6mv4riXabS7ljTwOF1zxFW0ruK4EYsRp5fslGOdqTzDg4mtihhjaFPBli6UHwj4DU7WMKupfRMcViizjGCa929hiupZkrCgYl1mNTaiV4UeJVa06~6uVCLNAiSqhZeBapYwomqMSjuGQnDIkac7mNX4VsSA__"
              alt="logo"
            />
            <div className="s1">
              <p className="card-head">Raju Rassibomb</p>
              <button className='card-button'onClick={openModal}>QUICK VIEW</button>
            </div>
          </article>
          <article className="card3">
            <img
              className="i1"
              src="https://s3-alpha-sig.figma.com/img/22f6/b7b5/b47561aa2ad560235e2702e286a6d4b7?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D1sbiDpivdUXcgrTSSc5RJI2iy3cl2mwuq097Tpi94ZpTu3~CqkJu2CqbmlnwjeiEeUzVqQUUgTZIB0HIJaeAcoUGpYkYgj5iApxpXhBq8jPPpW7Cmtm0saXQFrc0LKUy6XsnG8wxIZHPREhmyuW4LNknYuhHvNm8TprWaYRkGly99XqiTze8Z11IXY6mv4riXabS7ljTwOF1zxFW0ruK4EYsRp5fslGOdqTzDg4mtihhjaFPBli6UHwj4DU7WMKupfRMcViizjGCa929hiupZkrCgYl1mNTaiV4UeJVa06~6uVCLNAiSqhZeBapYwomqMSjuGQnDIkac7mNX4VsSA__"
              alt="logo"
            />

            <div className="s1">
              <p className="card-head">Ladiyon ki Rani Chani</p>
              <button className='card-button' onClick={openModal}>QUICK VIEW</button>
            </div>
          </article>
          
        </section>

        <span className="l2"></span>

      </main>

      <footer className="footer">
          <h1 className="footer-heading">Follow us on</h1>
          <div className="icons">
            <img className="icon" src="https://s3-alpha-sig.figma.com/img/a569/a252/98ad4bac62c5d9f48886f4cc17a7a334?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cm8zkln5hAAwW4ekdfdnsWhEQzcuUAyY9e6Y~Rz4zW6gAicdj01xzOE5010dSRbuzLPbjVMCX9jlQEUQNsUg40SfJjy~iAEeNo9YsYNzB08Ccb1zuXkwiQdaEZR7PpzaMCcDHuKwNuE2Xg3nhMR9VOA3WYvWjUk7FF5XoJ0~BWd6xhXJoQLUWfyJ7rF0HBCmm9p1qG7VE~WVLodSwwuVZW3GbwJ4Zy~5t0uffmdxGariTgMi5zjX-pqUGVwA-2Azb~GKn9trRDDI1v42x17DBepKlG4RErshZMsuWwCxUsXCTiHs1IRVgy0LUFqnx284B36-zQUPBOSlNKfL~gjkFg__" alt='icon'/>
            <img className="icon" src="https://s3-alpha-sig.figma.com/img/afff/a78b/0c0a25d9e71be520bb460ddb410bbb7a?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M97FaErH24O270IL3wdpsrd0DaJT525o9D3AI8QodVpxgDl6Fh4SY771Oq6eoKy7MtMFtFLwdTJfXdgQqKFik-VR4AnQLwKI49GIZBYWFEkWdE5pfXfCW6Qa9PM3Z9RAW6W~9V7S1AYmGgnYc~LZCEqqy~dg08q~G2duXh0DwLvb7afIk7AEvXEdHp0e9LTo60oFVNk7RLGlNII8bwLJV4ic4GijT43lWW0-zeeGl57EplrKK7GdQvR2rZqqbo2~I~lvqLb9Qi7yG45PyNuojR9z~5rCXhewOukUKI2~NE5W8nR8isdTQP1upfKPiQ8lP84l0Nuh~RW5~wX7wqkzwA__" alt='icon'/>

            <img className="icon" src="https://s3-alpha-sig.figma.com/img/4c5c/a965/cf3f5538ea0e143e7bb2c01d74a24c88?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C6N1DbpSHrQ8OCjxcvcKyUGYiPk232XGPHKcoo9UtK7DpEkVgKVDw36xi9seW~aHSdkXdME1wtboGQTPZJd~n3yHaap6Qt~hpGm40pIIKNv8L-8LXjrgFlvTXi~2-CAwVLJCa9gyHn7O55WqUi22P~oxo28R13R-3Z~qJa-E7svb2BnWJmKi5-HUE6ptrve50VXNuvFt1ZKKNXPHtwFYBhR2m~dXNPLlV7jnIwrkNglMsnb6~mYhcZ30XPU9DYVjxxouJyT-jkY1ggWzD6FLwuwpRW8271oW5pvZEqneXmUyhZ6as7sp~fP4oXr1xeHm7bnOeXIg3K4UQkm~510MuA__" alt='icon'/>

            <img className="icon" src="https://s3-alpha-sig.figma.com/img/098b/6848/74eda9afaa6a343c38d1e4e5a7c62078?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AmQx88yPdlGZeneGw1W89tGz2CfaAy0nDBUpex0vsgVNXeiRV3091gYsjjHCinDEaBsvCED4s3yG-~dVuwZYnYseiOle5br4SU89smvyj889MxcFsJ6d5WcTnngIFczc3pXCNve6FdLwZX-dySAfTKBMdqilDkkZie0-6FlvO8Ijk8PIBMEmpu7V7UJ8ZbnBxNSoe5JBOaHY66gRdNFTeu9hw-qlnqc2ATY7DRRVJ2LMgvMe2x8d9Tju7uPOVOfLb6mvbPKY-VeijbCk68O4SQfF0f~gyY81BDdjzkcs5QJnTQ1K9f0vxBh9xSvth3gyt-QM4TpRI~83VQSpzodEig__" alt='icon'/>

            <img className="icon" src="https://s3-alpha-sig.figma.com/img/d190/69d0/b2b64a6f5cf2f6897396b3bda7068949?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EkgApVboi0o~dvkxVQtg-CWN-Q47zxOeAL507crjglKgCDVmop4YYBy0SsESCNWgICvmQkVznammdyfSJTA6wQhobcQukGUOgN7iMMb8DM-Opb7-JFZhMYNIRueMZjeVPof6dws2rvkWkB-IqVop5mJIBaQHISBxl~k7UvlkpWTC3nzfvfsxf1Z2fqp1yE7YobDr~f8XUmjxTzHIm2EIUc1bCl~CKzXwmnkU5069EpBqaqM5V72-ashlkayS93Zv0toW-UZ1BmHHrezvSIUhFuRs-LoOjl8ZiuOODmFPKU7P18r9yqnLgx5n3namXI8Lb4L1BltyxdqzBAHt9hK~Zw__" alt='icon'/>

          </div>

        </footer>
    </>
  );
};

export default Card;
