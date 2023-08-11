import React from "react"
import { TouchableOpacity } from "react-native"

interface IconButtonProps {
  onPressIn: () => void
  icon: React.ReactNode
}
export function IconButton({ onPressIn, icon }: IconButtonProps) {
  return <TouchableOpacity onPress={onPressIn}>{icon}</TouchableOpacity>
}
