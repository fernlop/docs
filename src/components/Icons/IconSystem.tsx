import { Icon } from '@aws-amplify/ui-react';

export const IconSystem = ({ ...rest }) => {
  return (
    <Icon
      aria-hidden="true"
      {...rest}
      viewBox={{
        minX: 0,
        minY: 0,
        width: 24,
        height: 24
      }}
    >
      <path
        d="M12 0C5.376 0 0 5.376 0 12C0 18.624 5.376 24 12 24C18.624 24 24 18.624 24 12C24 5.376 18.624 0 12 0ZM10.8 21.516C6.072 20.928 2.4 16.896 2.4 12C2.4 7.104 6.06 3.072 10.8 2.484V21.516ZM13.2 2.484C14.436 2.64 15.6 3.024 16.644 3.6H13.2V2.484ZM13.2 6H19.488C19.788 6.372 20.064 6.78 20.304 7.2H13.2V6ZM13.2 9.6H21.288C21.384 9.996 21.468 10.392 21.516 10.8H13.2V9.6ZM13.2 21.516V20.4H16.644C15.6 20.976 14.436 21.36 13.2 21.516ZM19.488 18H13.2V16.8H20.304C20.064 17.22 19.788 17.628 19.488 18ZM21.288 14.4H13.2V13.2H21.516C21.468 13.608 21.384 14.004 21.288 14.4Z"
        fill="currentColor"
      />
    </Icon>
  );
};
