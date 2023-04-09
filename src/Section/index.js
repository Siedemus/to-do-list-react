import "./style.css";

const Section = ({subHeader, form}) => (
    <section className="section">
        {subHeader}
        {form}
    </section>
);

export default Section;