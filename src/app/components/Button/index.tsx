"use client"
import { Button } from '@material-tailwind/react';
import type { ButtonProps } from '@material-tailwind/react';
/** 像 onClick 这类只有在客户端才能使用的能力，必须要放在客户端组建中去。也就意味着，当其他地方调用 ClientButton 的时候，不能在其上显式的使用 onClick */
type ClientButtonProps = {
  children?: React.ReactNode,
  handleEventParams: string
}
const ClientButton = (props: ClientButtonProps) => {
  const {
    children,
    handleEventParams
  } = props;
  return <Button onClick={() => console.log(handleEventParams)}>{children}</Button>
};

export default ClientButton;
