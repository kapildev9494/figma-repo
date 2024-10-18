import React, { SVGProps } from 'react';
import {
  Button as FluentButton,
  makeStyles,
  mergeClasses,
} from '@fluentui/react-components';
import { brandThemeTokens } from '../ThemeProvider/theme';
import ThemeProvider from '../ThemeProvider';

// SVGElement props
type TSVGElementProps = SVGProps<SVGSVGElement>;

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  appearance?: 'primary' | 'secondary' | 'subtle' | 'transparent';
  className?: string;
  icon?: React.ReactElement<TSVGElementProps>;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
}

const useStyles = makeStyles({
  buttonBrand: {
    padding: `${brandThemeTokens.spacingVerticalXS} ${brandThemeTokens.spacingHorizontalL}`,
    borderRadius: brandThemeTokens.borderRadiusSmall,
    fontWeight: brandThemeTokens.fontWeightSemibold,
    color: brandThemeTokens.colorBrandForeground1,
    ':disabled': {
      color: brandThemeTokens.colorNeutralForegroundDisabled,
      backgroundColor: brandThemeTokens.colorNeutralBackgroundDisabled,
      fontWeight: brandThemeTokens.fontWeightSemibold,
      border: `${brandThemeTokens.strokeWidthThin} solid ${brandThemeTokens.colorNeutralBackgroundDisabled}`,
    },
    ':hover': {
      color: brandThemeTokens.colorBrandForeground1,
    },
    ':focus': {
      backgroundColor: brandThemeTokens['color-white'],
    },
  },
  buttonPrimary: {
    color: brandThemeTokens['color-white'],
    fontWeight: brandThemeTokens.fontWeightRegular,
    ':hover': {
      color: brandThemeTokens['color-white'],
    },
    ':focus': {
      outline: 'none',
      boxShadow: `inset 0 0 0 ${brandThemeTokens.strokeWidthThin} ${brandThemeTokens['color-white']}`,
      border: `${brandThemeTokens.strokeWidthThick} solid ${brandThemeTokens.colorBrandForeground1}`,
      backgroundColor: brandThemeTokens.colorBrandBackground,
    },
  },
  buttonSecondary: {
    ':focus': {
      border: `${brandThemeTokens.strokeWidthThick} solid ${brandThemeTokens.colorBrandForeground1}`,
    },
  },
});

const Button = ({
  appearance = 'primary',
  icon,
  size = 'medium',
  disabled,
  ...props
}: ButtonProps) => {
  const classes = useStyles();

  return (
    <ThemeProvider>
      <FluentButton
        {...props}
        icon={icon}
        size={size}
        appearance={appearance}
        className={mergeClasses(
          classes.buttonBrand,
          appearance == 'primary'
            ? classes.buttonPrimary
            : classes.buttonSecondary,
          props.className,
        )}
        disabled={disabled}
      >
        {props.children}
      </FluentButton>
    </ThemeProvider>
  );
};

export default Button;
