import React from "react";
import Image from "next/image";
import logo from "@/img/logo.svg";
import google from "@/img/google.png";
import tesla from "@/img/tesla.png";
import generalElectric from "@/img/generalelectric.png";
import amazon from "@/img/amazon-logo.png";
import microsoft from "@/img/microsoft.png";
import formula1 from "@/img/formula-1.png";
import target from "@/img/target.png";
import hp from "@/img/hp.svg";
import tmobile from "@/img/t-mobile.png";
import salesforce from "@/img/salesforce.png";
import apple from "@/img/apple.png";
import nvidia from "@/img/nvidia.png";

export default function Partners() {
  return (
    <div>
      <h3 className="text-center text-muted" style={{ padding: "30px 60px 0px 60px" }}>
        Our mission is strengthened by the indispensable contributions of our dedicated partners.
      </h3>
      <div className="partnericons">
        <div style={{ width: "100%", whiteSpace: "nowrap", margin: "20px 0px" }}>
          {[0, 0].map((x, i) => (
            <div style={{ display: "inline-block", animation: "26s slide1 infinite linear" }} key={i}>
              <Image src={google} width={200} height={120} alt="google logo" style={{ margin: "08px 50px" }} />
              <Image src={tesla} width={320} height={80} alt="tesla logo" style={{ margin: "0px 50px" }} />
              <Image
                src={generalElectric}
                width={110}
                height={110}
                alt="general electric logo"
                style={{ margin: "0px 50px" }}
              />
              <Image src={amazon} width={220} height={90} alt="amazon logo" style={{ margin: "0px 50px" }} />
              <Image src={microsoft} width={220} height={50} alt="microsoft logo" style={{ margin: "0px 50px" }} />
              <Image src={formula1} width={170} height={170} alt="formula1 logo" style={{ margin: "0px 50px" }} />
            </div>
          ))}
        </div>
        <div style={{ width: "100%", whiteSpace: "nowrap", margin: "20px 0px" }}>
          {[0, 0].map((x, i) => (
            <div style={{ display: "inline-block", animation: "26s slide2 infinite linear" }} key={i}>
              <Image src={target} width={80} height={80} alt="target logo" style={{ margin: "0px 50px" }} />
              <Image src={hp} width={170} height={170} alt="hp logo" style={{ margin: "0px 50px" }} />
              <Image src={tmobile} width={200} height={90} alt="T-Mobile logo" style={{ margin: "0px 50px" }} />
              <Image src={salesforce} width={180} height={120} alt="salesforce logo" style={{ margin: "0px 50px" }} />
              <Image src={apple} width={70} height={90} alt="apple logo" style={{ margin: "0px 50px" }} />
              <Image src={nvidia} width={300} height={180} alt="nvidia logo" style={{ margin: "0px 50px" }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}