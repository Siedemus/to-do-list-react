import Section from "../../../../common/Section";
import SubHeader from "../../../../common/SubHeader";
import { searchQueryParamName } from "../../searchQueryParamName";
import { useQueryParameter } from "../../useQueryParameter";
import { Wrapper, Input } from "./styled";
import { useReplaceQueryParameter } from "../../useReplaceQueryParameter";

export const Search = () => {
  const query = useQueryParameter(searchQueryParamName);
  const replaceQueryParameter = useReplaceQueryParameter();

  const onInputChange = ({ target }) => {
    replaceQueryParameter({
      key: searchQueryParamName,
      value: target.value.trim() !== "" ? target.value : undefined,
    });
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
