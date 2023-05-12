import {
  Burger,
  Container,
  Group,
  Header,
  Title,
  UnstyledButton,
  createStyles,
  Text,
  useMantineColorScheme,
  Center,
  rem,
} from "@mantine/core";
import { upperFirst, useDisclosure } from "@mantine/hooks";
import { IconMoon, IconSun } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  headerContainer: {
    backgroundColor: theme.fn.variant({
      variant: "filled",
      color: theme.primaryColor,
    }).background,
    borderColor: theme.colors.gray[6],
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    backgroundColor: theme.fn.variant({
      variant: "filled",
      color: theme.primaryColor,
    }).background,
  },

  burger: {
    [theme.fn.largerThan("xs")]: {
      display: "none",
    },
  },

  logo: {
    color: theme.white,
  },
}));

export default function HeaderComp() {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes, cx } = useStyles();

  return (
    <Header height={60} className={classes.headerContainer}>
      <Container className={classes.header}>
        <Title className={classes.logo}>PortMaster</Title>
        <Group></Group>
        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />
      </Container>
    </Header>
  );
}
