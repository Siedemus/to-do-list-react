import "./style.css";

const Section = ({subHeader, form, container}) => (
    <section className="section">
        {subHeader}
        {form}
        {container}
    </section>
);

export default Section;