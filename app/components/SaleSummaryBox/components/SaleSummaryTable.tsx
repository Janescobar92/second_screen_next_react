"use client";
import {
  styled,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";

import { useAppTheme } from "@/app/Hooks";
import { formatCurrency } from "@/app/utils";
import { Order } from "@/app/interfaces";

import { ORDER_SUMMARY_HEAD, SERVICES_LABEL } from "../constants";
import HeadSectionLabel from "./HeadSeactionLabel";
import { Fragment } from "react";

const TableCellStyled = styled(TableCell)(() => ({
  borderBottom: "none",
}));

const TypographyStyled = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey?.[600],
  fontSize: "0.875",
  fontWeight: 600,
}));

function SaleSummaryTable(props: { order: Order }) {
  const { order } = props;
  const theme = useAppTheme();
  const items = order.items.filter((item) => !item.is_promo);
  const promos = order.items.filter((item) => item.is_promo);
  const hasPromo = !!promos.length;

  return (
    <div>
      <HeadSectionLabel text={ORDER_SUMMARY_HEAD} />
      <Table size="small">
        <TableBody>
          {items.map((item) => {
            const productPrice = formatCurrency(item?.total_cost);
            const hasServices = !!item.extra_items.length;
            const itemServices = order?.calculate_payload?.services.find(
              (service) => service?.item_id === item?.id
            );
            const servicesPrice = formatCurrency(
              itemServices?.work_price_iva || 0
            );

            return (
              <Fragment key={`${item?.id}`}>
                <TableRow>
                  <TableCellStyled>
                    <TypographyStyled>
                      {item.name || item?.display_name}
                    </TypographyStyled>
                  </TableCellStyled>
                  <TableCellStyled align="right">
                    <TypographyStyled>{productPrice}</TypographyStyled>
                  </TableCellStyled>
                </TableRow>
                {hasServices && (
                  <TableRow>
                    <TableCellStyled>
                      <TypographyStyled>{SERVICES_LABEL}</TypographyStyled>
                    </TableCellStyled>
                    <TableCellStyled align="right">
                      <TypographyStyled>{servicesPrice}</TypographyStyled>
                    </TableCellStyled>
                  </TableRow>
                )}
              </Fragment>
            );
          })}
          {hasPromo &&
            promos.map((promo) => {
              const promotionPrice = `-${formatCurrency(promo.price)}`;
              return (
                <TableRow key={`${promo.name}-${promo.price}`}>
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
