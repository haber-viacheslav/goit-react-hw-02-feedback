import PropTypes from 'prop-types';
import { SectionWrp, SectionTitle } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <SectionWrp>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionWrp>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
