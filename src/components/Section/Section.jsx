import { StatisticsSection, StatisticsTitle } from './Section.styled';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <StatisticsSection>
      <StatisticsTitle>{title}</StatisticsTitle>
      {children}
    </StatisticsSection>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
