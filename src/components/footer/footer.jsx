//para utilizar o componente crie o import na pagina que deseja
//coloque o descritivo entre <Footer>Descritivo</Footer>
//passe a informação dentro da tag Footer LINK
// <Footer link={}>ProfCastello</Footer>
import SocialLinks from "../socialLinks/socialLinks";
import "./footer.module.css";

const Footer = ({ children, link }) => {
  return (
    <footer>
      <p>
        Feito com <ion-icon name="heart" /> por {""}
        <a href={link} target="_blank">
          {children}
        </a>
      </p>
        <SocialLinks icon={"logo-github"} href={"https://github.com/"} />
        <SocialLinks icon={"logo-instagram"} href={"https://www.instagram.com/"} />
        <SocialLinks icon={"logo-whatsapp"} href={"https://web.whatsapp.com/"} />
    </footer>
  );
};

export default Footer;
