import Image from "next/image";
import "@/scss/anim.scss";

export default function Partners() {
  return (
    <div>
      <h3 className="text-center text-gray-500" style={{ padding: "30px 60px 0px 60px" }}>
        Our mission is strengthened by the indispensable contributions of our dedicated partners.
      </h3>
      <div>
        <div className="flex">
          {[0, 0].map((x, i) => (
            <div className="flex" style={{ animation: "26s slide1 infinite linear" }} key={i}>
              <div>
                <Image src="/google.png" width={200} height={120} alt="google logo" style={{ margin: "08px 50px" }} />
              </div>
              <div>
                <Image src="/tesla.png" width={320} height={80} alt="tesla logo" style={{ margin: "0px 50px" }} />
              </div>
              <div>
                <Image
                  src="/generalelectric.png"
                  width={110}
                  height={110}
                  alt="general electric logo"
                  style={{ margin: "0px 50px" }}
                />
              </div>
              <div>
                <Image src="/amazon-logo.png" width={220} height={90} alt="amazon logo" style={{ margin: "0px 50px" }} />
              </div>
              <div>
                <Image src="/microsoft.png" width={220} height={50} alt="microsoft logo" style={{ margin: "0px 50px" }} />
              </div>
              <div>
                <Image src="/formula1.png" width={170} height={170} alt="formula1 logo" style={{ margin: "0px 50px" }} />
              </div>
            </div>
          ))}
        </div>
        <div className="flex" style={{ width: "100%", whiteSpace: "nowrap", margin: "20px 0px" }}>
          {[0, 0].map((x, i) => (
            <div style={{ display: "inline-block", animation: "26s slide2 infinite linear" }} key={i}>
              <div>
                <Image src="/target.png" width={80} height={80} alt="target logo" style={{ margin: "0px 50px" }} />
              </div>
              <div>
                <Image src="/hp.svg" width={170} height={170} alt="hp logo" style={{ margin: "0px 50px" }} />
              </div>
              <div>
                <Image src="/t-mobile.png" width={200} height={90} alt="T-Mobile logo" style={{ margin: "0px 50px" }} />
              </div>
              <div>
                <Image src="/salesforce.png" width={180} height={120} alt="salesforce logo" style={{ margin: "0px 50px" }} />
              </div>
              <div>
                <Image src="/apple.png" width={70} height={90} alt="apple logo" style={{ margin: "0px 50px" }} />
              </div>
              <div>
                <Image src="/nvidia.png" width={300} height={180} alt="nvidia logo" style={{ margin: "0px 50px" }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}