import React from "react"
import { color } from "../helpers"
import { Icon, IconProps } from "./Icon"

/** DocumentIcon */
export const DocumentIcon: React.SFC<IconProps> = props => {
  return (
    <Icon {...props} viewBox="0 0 18 18">
      <title>View orders</title>
      <path
        d="M14 2H4v14h10V2zm1-.5v15a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-15a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5zM6 10h6v1H6v-1zm0 3h4v1H6v-1z"
        fill={color(props.fill)}
        fillRule="nonzero"
      />
    </Icon>
  )
}
