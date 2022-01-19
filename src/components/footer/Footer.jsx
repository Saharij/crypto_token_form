import './Footer.scss';

export const Footer = () => {
  return (
    <div className="footer">
      <p className="footer__text">
        © 2021 All rights reserved.
      </p>
        <ul className="footer__list">
          <li className="footer__list-item">
            <a
              href="#"
              className="footer__list-item-link"
            >
              Terms
            </a>
          </li>
          <li className="footer__list-item">
            <a
              href="#"
              className="footer__list-item-link"
            >
              Privacy
            </a>
          </li>
          <li className="footer__list-item">
            <a
              href="#"
              className="footer__list-item-link"
            >
              FAQ
            </a>
          </li>
        </ul>
      <p className="footer__text">
        Contact us: ask@test.capital
      </p>
    </div>
  );
};
