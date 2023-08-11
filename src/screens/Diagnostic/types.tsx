import { StackNavigationProp } from "@react-navigation/stack"

export type DiagnosticParamList = {
  Symptoms: undefined
  SymptomsType: undefined
  DesiredGoals: undefined
  Calculating: undefined
  Results: undefined
}

export type SymptomsTypeViewProps = {
  navigation: StackNavigationProp<DiagnosticParamList, "SymptomsType">
}

export type SymptomsViewProps = {
  navigation: StackNavigationProp<DiagnosticParamList, "Symptoms">
}

export type DesiredGoalsViewProps = {
  navigation: StackNavigationProp<DiagnosticParamList, "DesiredGoals">
}

export type CalculatingViewProps = {
  navigation: StackNavigationProp<DiagnosticParamList, "Calculating">
}

export type ResultsViewProps = {
  navigation: StackNavigationProp<DiagnosticParamList, "Results">
}
