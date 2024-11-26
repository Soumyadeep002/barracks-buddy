import React, {useEffect} from "react";

const TermsAndConditionsPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  return (
    <div className="w-full md:w-[90%] lg:w-[70%] mx-auto px-5 text-justify bg-white ">
      <div className=" mx-auto bg-white rounded-lg p-6 sm:p-10">
        <h1 className="text-[32px] text-darkGreen font-semibold  mb-4 mt-16 md:mt-20 lg:mt-28">
          Terms & Conditions
        </h1>
        <p className="text-black font-semibold mb-2">
          Last updated on: Nov 16th, 2024
        </p>
        <section className="mb-8">
          <p className="text-black font-semibold leading-relaxed">
            For the purpose of these Terms and Conditions, The term "we", "us",
            "our" used anywhere on this page shall mean BARRACK'S BUDDY, whose
            registered/operational office is Village Bhainswal, Gurjar Street,
            Near Government Middle School Bhainswal Panipat HARYANA 132104 .
            "you", “your”, "user", “visitor” shall mean any natural or legal
            person who is visiting our website and/or agreed to purchase from
            us.
            <br />
            Your use of the website and/or purchase from us are governed by the
            following Terms and Conditions:
          </p>

          <ul className="list-disc list-inside ml-3 mt-3 text-black font-semibold space-y-2">
            <li>
              The content of the pages of this website is subject to change
              without notice.
            </li>
            <li>
              Neither we nor any third parties provide any warranty or guarantee
              as to the accuracy, timeliness, performance, completeness or
              suitability of the information and materials found or offered on
              this website for any particular purpose. You acknowledge that such
              information and materials may contain inaccuracies or errors and
              we expressly exclude liability for any such inaccuracies or errors
              to the fullest extent permitted by law.
            </li>
            <li>
              Your use of any information or materials on our website and/or
              product pages is entirely at your own risk, for which we shall not
              be liable. It shall be your own responsibility to ensure that any
              products, services or information available through our website
              and/or product pages meet your specific requirements.
            </li>
            <li>
              Our website contains material which is owned by or licensed to us.
              This material includes, but is not limited to, the design, layout,
              look, appearance, and graphics. Reproduction is prohibited other
              than in accordance with the copyright notice, which forms part of
              these terms and conditions.
            </li>
            <li>
              All trademarks reproduced on our website which are not the
              property of, or licensed to, the operator are acknowledged on the
              website.
            </li>
            <li>
              Unauthorized use of information provided by us shall give rise to
              a claim for damages and/or be a criminal offense.
            </li>
            <li>
              From time to time, our website may also include links to other
              websites. These links are provided for your convenience to provide
              further information.
            </li>
            <li>
              You may not create a link to our website from another website or
              document without BARRACK'S BUDDY’s prior written consent.
            </li>
            <li>
              Any dispute arising out of use of our website and/or purchase with
              us and/or any engagement with us is subject to the laws of India.
            </li>
            <li>
              We, shall be under no liability whatsoever in respect of any loss
              or damage arising directly or indirectly out of the decline of
              authorization for any transaction, on account of the cardholder
              having exceeded the preset limit mutually agreed by us with our
              acquiring bank from time to time.
            </li>
          </ul>
        </section>

        {/* <section className="mb-8">
          <h1 className=" font-semibold text-[32px] text-darkGreen mb-4">
            Cancellation & Refund Policy
          </h1>
          <p className="text-black font-semibold mb-2">
            Last updated on: Nov 16th, 2024
          </p>
          <p className="font-semibold leading-relaxed">
            BARRACK'S BUDDY believes in helping its customers as far as possible
            and has therefore a liberal cancellation policy. Under this policy:
          </p>
          <ul className="list-disc list-inside ml-3 mt-3 font-semibold space-y-2">
            <li>
              Cancellations will be considered only if the request is made
              within 7 days of placing the order. However, the cancellation
              request may not be entertained if the orders have been
              communicated to the vendors/merchants and they have initiated the
              process of shipping them.
            </li>
            <li>
              BARRACK'S BUDDY does not accept cancellation requests for
              perishable items like flowers, eatables, etc. However,
              refund/replacement can be made if the customer establishes that
              the quality of the product delivered is not good.
            </li>
            <li>
              In case of receipt of damaged or defective items, please report
              the same to our Customer Service team. The request will, however,
              be entertained once the merchant has checked and determined the
              same at their own end. This should be reported within 7 days of
              receipt of the products.
            </li>
            <li>
              In case you feel that the product received is not as shown on the
              site or as per your expectations, you must bring it to the notice
              of our customer service within 7 days of receiving the product.
              The Customer Service Team, after looking into your complaint, will
              take an appropriate decision.
            </li>
            <li>
              In case of complaints regarding products that come with a warranty
              from manufacturers, please refer the issue to them.
            </li>
            <li>
              In case of any refunds approved by BARRACK'S BUDDY, it’ll take 6–8
              days for the refund to be processed to the end customer.
            </li>
          </ul>
        </section> */}

        <section className="mb-8">
          <h2 className="text-[32px] text-darkGreen font-semibold  mb-2">
            Privacy Policy
          </h2>
          <p className="font-semibold leading-relaxed">
            Last updated on Nov 16th 2024
            <br />
            This privacy policy sets out how BARRACK'S BUDDY uses and protects
            any information that you give BARRACK'S BUDDY when you visit their
            website and/or agree to purchase from them.
          </p>
          <p className="font-semibold leading-relaxed">
            BARRACK'S BUDDY is committed to ensuring that your privacy is
            protected. Should we ask you to provide certain information by which
            you can be identified when using this website, and then you can be
            assured that it will only be used in accordance with this privacy
            statement.
          </p>
          <p className="font-semibold leading-relaxed">
            BARRACK'S BUDDY may change this policy from time to time by updating
            this page. You should check this page from time to time to ensure
            that you adhere to these changes.
          </p>
          <p className="font-semibold leading-relaxed">
            We may collect the following information:
          </p>

          <ul className="list-disc list-inside mt-3 ml-3 font-semibold space-y-2">
            <li>Name</li>
            <li>Contact information including email address</li>
            <li>
              Demographic information such as postcode, preferences and
              interests, if required
            </li>
            <li>
              Other information relevant to customer surveys and/or offers
            </li>
          </ul>
          <p className="font-semibold leading-relaxed">
            What we do with the information we gather
          </p>
          <p className="font-semibold leading-relaxed">
            We require this information to understand your needs and provide you
            with a better service, and in particular for the following reasons:
          </p>
          <ul className="list-disc list-inside mt-3 ml-3 font-semibold space-y-2">
            <li>Internal record keeping.</li>
            <li>
              We may use the information to improve our products and services.
            </li>
            <li>
              We may periodically send promotional emails about new products,
              special offers or other information which we think you may find
              interesting using the email address which you have provided.
            </li>
            <li>
              From time to time, we may also use your information to contact you
              for market research purposes. We may contact you by email, phone,
              fax or mail. We may use the information to customise the website
              according to your interests.
            </li>
          </ul>
          <p className="font-semibold">
            We are committed to ensuring that your information is secure. In
            order to prevent unauthorised access or disclosure we have put in
            suitable measures.
            <br />
            How we use cookies
            <br />A cookie is a small file which asks permission to be placed on
            your computer's hard drive. Once you agree, the file is added and
            the cookie helps analyze web traffic or lets you know when you visit
            a particular site. Cookies allow web applications to respond to you
            as an individual. The web application can tailor its operations to
            your needs, likes and dislikes by gathering and remembering
            information about your preferences.
            <br /> We use traffic log cookies to identify which pages are being
            used. This helps us analyze data about webpage traffic and improve
            our website in order to tailor it to customer needs. We only use
            this information for statistical analysis purposes and then the data
            is removed from the system
            <br /> Overall, cookies help us provide you with a better website,
            by enabling us to monitor which pages you find useful and which you
            do not.
            <br /> A cookie in no way gives us access to your computer or any
            information about you, other than the data you choose to share with
            us. You can choose to accept or decline cookies. Most web browsers
            automatically accept cookies, but you can usually modify your
            browser setting to decline cookies if you prefer. This may prevent
            you from taking full advantage of the website. Controlling your
            personal information
          </p>
          <p className="font-semibold leading-relaxed">
            You may choose to restrict the collection or use of your personal
            information in the following ways:
          </p>
          <ul className="list-disc list-inside mt-3 ml-3 font-semibold space-y-2">
            <li>
              whenever you are asked to fill in a form on the website, look for
              the box that you can click to indicate that you do not want the
              information to be used by anybody for direct marketing purposes
            </li>
            <li>
              if you have previously agreed to us using your personal
              information for direct marketing purposes, you may change your
              mind at any time by writing to or emailing us at
            </li>
          </ul>
          <p className="font-semibold leading-relaxed">
          We will not sell, distribute or lease your personal information to third parties unless we have your permission or are required by law to do so. We may use your personal information to send you promotional information about third parties which we think you may find interesting if you tell us that you wish this to happen.
          </p>
          <p className="font-semibold leading-relaxed">
          If you believe that any information we are holding on you is incorrect or incomplete, please write to Village Bhainswal, Gurjar Street, Near Government Middle School Bhainswal Panipat HARYANA 132104 . or contact us at or as soon as possible. We will promptly correct any information found to be incorrect.
          </p>
        </section>

        {/* <section className="mb-8">
          <h2 className="text-[32px] text-darkGreen font-semibold mb-2">
            Shipping & Delivery Policy
          </h2>
          <p className="font-semibold leading-relaxed">
            Last updated on Nov 16th 2024
            <br />
            Shipping is not applicable for business.
          </p>
        </section> */}

        <section>
          <h2 className="text-[32px] text-darkGreen font-semibold mb-2">
            Contact Us
          </h2>
          <p className="font-semibold leading-relaxed">
            Last updated on: Nov 16th, 2024
          </p>
          <p className="font-semibold leading-relaxed">
            You may contact us using the information below:
          </p>
          <address className="mt-2 font-semibold">
            Merchant Legal entity name: BARRACK'S BUDDY <br />
            Registered Address: Village Bhainswal, Gurjar Street, Near
            Government Middle School Bhainswal Panipat HARYANA 132104 <br />
            Operational Address: H. NO. 100, BHAINSWAL, PANIPAT Panipat HARYANA
            132103 <br />
            Telephone No: <a href="tel:9007087659">9007087659</a> <br />
            E-Mail ID:{" "}
            <a href="mailto:info@barracksbuddy.com">info@barracksbuddy.com</a>
          </address>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
