"use client";
import {
  styled,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";

import useAppTheme from "@/app/Hooks/useAppTheme";
import { formatCurrency } from "@/app/utils";
import { SuggestedItem } from "@/app/interfaces";

import { ORDER_SUMMARY_HEAD, SERVICES_LABEL } from "../constants";
import HeadSectionLabel from "./HeadSeactionLabel";

const TableCellStyled = styled(TableCell)(() => ({
  borderBottom: "none",
}));

const TypographyStyled = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey?.[600],
  fontSize: "0.875",
  fontWeight: 600,
}));

function SaleSummaryTable(props: { product: SuggestedItem }) {
  const { product } = props;
  const theme = useAppTheme();
  const productPrice = formatCurrency(product?.price);

  // TODO: REMOVE THIS MOCKED DATA
  product.has_services = !!product?.extra_items.length;
  product.promotion = [{ name: "Test promo", amount: "38.50" }];
  product.services_total_cost = "293.00";

  const servicesTotalCost = formatCurrency(product?.services_total_cost);
  const hasService = product.has_services;
  const hasPromo = !!product?.promotion.length;

  return (
    <div>
      <HeadSectionLabel text={ORDER_SUMMARY_HEAD} />
      <Table size="small">
        <TableBody>
          <TableRow>
            <TableCellStyled>
              <TypographyStyled>{product?.display_name}</TypographyStyled>
            </TableCellStyled>
            <TableCellStyled align="right">
              <TypographyStyled>{productPrice}</TypographyStyled>
            </TableCellStyled>
          </TableRow>
          {hasService && (
            <TableRow>
              <TableCellStyled>
                <TypographyStyled>{SERVICES_LABEL}</TypographyStyled>
              </TableCellStyled>
              <TableCellStyled align="right">
                <TypographyStyled>{servicesTotalCost}</TypographyStyled>
              </TableCellStyled>
            </TableRow>
          )}
          {hasPromo &&
            product.promotion.map((promo) => {
              const promotionPrice = `-${formatCurrency(promo.amount)}`;
              return (
                <TableRow key={`${promo.name}-${promo.amount}`}>
                  <TableCellStyled>
                    <TypographyStyled>{promo.name}</TypographyStyled>
                  </TableCellStyled>
                  <TableCellStyled align="right">
                    <TypographyStyled sx={{ color: theme.palette.error.main }}>
                      {promotionPrice}
                    </TypographyStyled>
                  </TableCellStyled>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </div>
  );
}

export default SaleSummaryTable;
