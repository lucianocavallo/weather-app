import { Section, Conversion, ForecastContainer, Footer } from './styles';

const SecondarySection: React.FC<SecondarySectionProps> = ({
  forecast,
  highlights,
}) => {
  return (
    <Section>
      <Conversion>
        <span className="WaSecondarySection-conversion__celsius">ºC</span>
        <span className="WaSecondarySection-conversion__farenheit">ºF</span>
      </Conversion>
      <ForecastContainer>{forecast}</ForecastContainer>
      {highlights}
      <Footer>
        created by @lucianocavallo8 -{' '}
        <a href="https://github.com/lucianocavallo">github</a>
      </Footer>
    </Section>
  );
};

export { SecondarySection };
