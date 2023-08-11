import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import { DiagnosticParamList } from "./types"
import { DesiredGoalsView } from "./DesiredGoalsView"
import { SymptomsTypeView } from "./SymptomsTypeView"
import { SymptomsView } from "./SymptomsView"
import { CalculatingView } from "./CalculatingView"
import { ResultsView } from "./Results"

const DiagnosticStack = createStackNavigator<DiagnosticParamList>()

export const DiagnosticScreen = () => (
  <DiagnosticStack.Navigator>
    <DiagnosticStack.Screen
      name="Symptoms"
      component={SymptomsView}
      options={{ header: () => null }}
    />
    <DiagnosticStack.Screen
      name="SymptomsType"
      component={SymptomsTypeView}
      options={{ header: () => null }}
    />
    <DiagnosticStack.Screen
      name="DesiredGoals"
      component={DesiredGoalsView}
      options={{ header: () => null }}
    />
    <DiagnosticStack.Screen
      name="Calculating"
      component={CalculatingView}
      options={{ header: () => null }}
    />
    <DiagnosticStack.Screen
      name="Results"
      component={ResultsView}
      options={{ header: () => null }}
    />
  </DiagnosticStack.Navigator>
)
