import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
export const Page = styled(Grid).attrs({
  container: true,
  spacing: 1000
})`
  padding: 16px;
`;
export const Container = styled(Grid).attrs({
  container: true
})``;
export const Item = styled(Grid).attrs({
  item: true
})``;
export const Row = styled(Grid).attrs({
  item: true,
  xs: 12
})`
  position: relative;
`;
