import LinkItem from "../ui/LinkItem";
import Wrapper from "../sections/Wrapper";
import Link from "next/link";
function Footer() {
  return (
    <Wrapper>
      <div className="flex text-2xl font-neuf space-y-12 lg:space-y-0 lg:justify-between  flex-col lg:flex-row pr-91 pb-12.5 mt-31">
        <div>
          <p>Ape Unit GmbH</p>
          <p>
            Waldemarstraße 38,
            <br />
            10999 Berlin
          </p>
        </div>
        <div>
          <LinkItem to="https://twitter.com/apeunit" blank>
            Twitter
          </LinkItem>
          <LinkItem to="https://www.facebook.com/apeunit/" blank>
            Facebook
          </LinkItem>
          <LinkItem to="https://de.linkedin.com/company/ape-unit" blank>
            LinkedIn
          </LinkItem>
        </div>
        <div className="flex gap-x-1">
          <Link href="https://apeunit.com/impressum.txt" target="_blank">
            Impressum
          </Link>
          /
          <Link href="https://apeunit.com/datenschutz.txt" target="_blank">
            Privacy
          </Link>
        </div>
      </div>
    </Wrapper>
  );
}
export default Footer;
