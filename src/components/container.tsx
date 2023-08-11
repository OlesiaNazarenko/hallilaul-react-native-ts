import React from "react"
import styled from "styled-components/native"

const ContainerStyled = styled.View`
  padding: 20px;
  padding-top: 70px;
  display: flex;
`

export const Container = ({ children }: { children: React.ReactNode }) => (
  <ContainerStyled>{children}</ContainerStyled>
)
