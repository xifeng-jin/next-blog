import Link from "next/link";

import { ReactNode } from "react";

interface NavigationButtonProps {
  href: string;
  title: string;
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary" | "ghost";
  icon?: ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
}

export default function NavigationButton({
  href,
  title,
  size = "medium",
  variant = "primary",
  icon,
  fullWidth = false,
  disabled = false,
}: NavigationButtonProps) {
    // 尺寸样式
  const sizeStyles = {
    small: "px-3 py-1.5 text-sm font-medium gap-1.5",
    medium: "px-4 py-2.5 text-base font-semibold gap-2",
    large: "px-6 py-3.5 text-lg font-semibold gap-2.5",
  };

  // 变体样式
  const variantStyles = {
    primary: `
      bg-blue-600 text-white
      hover:bg-blue-700
      active:bg-blue-800
      focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600
      disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed
    `,
    secondary: `
      bg-white text-gray-900 border border-gray-300
      hover:bg-gray-50 hover:border-gray-400
      active:bg-gray-100
      focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600
      disabled:bg-gray-100 disabled:text-gray-400 disabled:border-gray-300 disabled:cursor-not-allowed
    `,
    ghost: `
      bg-transparent text-gray-700
      hover:bg-gray-100 hover:text-gray-900
      active:bg-gray-200
      focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-700
      disabled:text-gray-400 disabled:hover:bg-transparent disabled:cursor-not-allowed
    `,
  };

  // 动画过渡
  const baseStyles = `
    inline-flex items-center justify-center
    rounded-lg
    transition-all duration-200 ease-in-out
    whitespace-nowrap
    relative
    overflow-hidden
    group
  `;

  // 点击效果
  const clickEffect = `
    after:absolute after:inset-0 
    after:bg-white after:opacity-0 
    after:transition-opacity after:duration-200
    hover:after:opacity-10
    active:after:opacity-20
  `;

  // 宽度控制
  const widthStyle = fullWidth ? "w-full" : "";

  // 组合所有样式
  const buttonClasses = `
    ${baseStyles}
    // ${sizeStyles[size]}
    // ${variantStyles[variant]}
    // ${clickEffect}
    // ${widthStyle}
    // ${disabled ? "pointer-events-none" : ""}
  `.trim().replace(/\s+/g, " ");

    // 内容包装
  const ButtonContent = () => (
    <>
      {icon && (
        <span className={`inline-flex items-center justify-center ${
          size === "small" ? "w-4 h-4" : 
          size === "medium" ? "w-5 h-5" : "w-6 h-6"
        }`}>
          {icon}
        </span>
      )}
      <span className="relative z-10">{title}</span>
      {!disabled && (
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/0 to-transparent 
          translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
      )}
    </>
  );

  if (disabled) {
    return (
      <div className={buttonClasses}>
        <ButtonContent />
      </div>
    );
  }

  return (
    <Link href={href} className={buttonClasses}>
      <ButtonContent />
    </Link>
    
  );
}
