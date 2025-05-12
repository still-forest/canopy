import { ActivityItem, Button, Card, Footer, Header } from "@src/components";
import { Box, Flex, Grid, Heading, Text } from "@/main";

const Demo = () => (
  <Flex direction="col" className="min-h-screen bg-background">
    <Header />
    <Box className="flex-1">
      <Flex direction="row" className="container mx-auto">
        {/* Main content area */}
        <Box className="flex-1 p-6">
          <Flex direction="col" gap="8">
            {/* Page header */}
            <Flex direction="row" align="center" justify="between">
              <Box>
                <Heading level="1" size="3xl">
                  Dashboard
                </Heading>
                <Text variant="muted" className="mt-1">
                  Overview of your account and recent activity.
                </Text>
              </Box>
              <Flex direction="row" gap="3">
                <Button variant="outline">Export</Button>
                <Button variant="primary">New Project</Button>
              </Flex>
            </Flex>

            {/* Stats overview */}
            <Grid cols="4" gap="6" className="md:grid-cols-2 lg:grid-cols-4">
              <Card className="p-4">
                <Text size="sm" variant="muted">
                  Total Revenue
                </Text>
                <Flex direction="row" align="baseline" gap="2" className="mt-1">
                  <Heading level="3" size="2xl">
                    $45,231.89
                  </Heading>
                  <Text size="sm" variant="success">
                    +20.1%
                  </Text>
                </Flex>
              </Card>

              <Card className="p-4">
                <Text size="sm" variant="muted">
                  Subscriptions
                </Text>
                <Flex direction="row" align="baseline" gap="2" className="mt-1">
                  <Heading level="3" size="2xl">
                    2,350
                  </Heading>
                  <Text size="sm" variant="success">
                    +10.5%
                  </Text>
                </Flex>
              </Card>

              <Card className="p-4">
                <Text size="sm" variant="muted">
                  Active Users
                </Text>
                <Flex direction="row" align="baseline" gap="2" className="mt-1">
                  <Heading level="3" size="2xl">
                    12,543
                  </Heading>
                  <Text size="sm" variant="success">
                    +35.2%
                  </Text>
                </Flex>
              </Card>

              <Card className="p-4">
                <Text size="sm" variant="muted">
                  Avg. Session
                </Text>
                <Flex direction="row" align="baseline" gap="2" className="mt-1">
                  <Heading level="3" size="2xl">
                    45s
                  </Heading>
                  <Text size="sm" variant="destructive">
                    -5.1%
                  </Text>
                </Flex>
              </Card>
            </Grid>

            {/* Two-column layout example */}
            <Grid cols="3" gap="6" className="md:grid-cols-1 lg:grid-cols-3">
              <Box className="col-span-2">
                <Flex direction="col" gap="4">
                  <Flex direction="row" align="center" justify="between">
                    <Heading level="2" size="xl">
                      Recent Activity
                    </Heading>
                    <Text size="sm" variant="accent" weight="medium">
                      View all
                    </Text>
                  </Flex>

                  <Card>
                    <ActivityItem
                      icon="A1"
                      title="Project Alpha launched"
                      time="2 hours ago"
                      badge={{ text: "New", variant: "primary" }}
                    />
                    <ActivityItem
                      icon="A2"
                      title="Team meeting"
                      time="Yesterday"
                      badge={{ text: "Completed", variant: "default" }}
                    />
                    <ActivityItem icon="A3" title="New comment on post" time="2 days ago" />
                    <ActivityItem
                      icon="A4"
                      title="Subscription renewed"
                      time="5 days ago"
                      badge={{ text: "Payment", variant: "outline" }}
                    />
                  </Card>
                </Flex>
              </Box>

              <Box>
                <Flex direction="col" gap="4">
                  <Heading level="2" size="xl">
                    Team Members
                  </Heading>

                  <Card className="p-4">
                    <Flex direction="col" gap="4">
                      <Text variant="muted" size="sm">
                        Manage your team members and their account permissions.
                      </Text>

                      <Button variant="outline" size="sm" className="w-full">
                        Invite Members
                      </Button>
                    </Flex>
                  </Card>

                  <Heading level="2" size="xl" className="mt-4">
                    Recent Documents
                  </Heading>

                  <Card className="p-4">
                    <Flex direction="col" gap="4">
                      <Text variant="muted" size="sm">
                        Documents that you have recently opened or edited.
                      </Text>

                      <Button variant="outline" size="sm" className="w-full">
                        View All
                      </Button>
                    </Flex>
                  </Card>
                </Flex>
              </Box>
            </Grid>
          </Flex>
        </Box>
      </Flex>
    </Box>

    <Footer />
  </Flex>
);

export { Demo };
