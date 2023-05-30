import Section from "../../../../common/Section";
import SubHeader from "../../../../common/SubHeader";
import { Wrapper, Input } from "./styled";
import { useLocation, useHistory } from "react-router-dom";

export const Search = () => {
  const location = useLocation();
  const history = useHistory();
  const query = new URLSearchParams(location.search).get("szukaj");

  const onInputChange = ({ target }) => {
    const searchParams = new URLSearchParams(location.search);

    if (target.value.trim() === "") {
      searchParams.delete("szukaj");
    } else {
      searchParams.set("szukaj", target.value);
    }

    history.push(`${location.pathname}?${searchParams.toString()}`);
  };

  return (
    <Section
      title={
        <SubHeader title={"Wyszukiwarka"} extraContent={true} isMajor={true} />
      }
      body={
        <Wrapper>
          <Input
            placeholder="Wyszukaj zadanie"
            value={query || ""}
            onChange={(e) => onInputChange(e)}
          />
        </Wrapper>
      }
    />
  );
};
