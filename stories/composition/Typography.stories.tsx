import type { Meta, StoryObj } from "@storybook/react";

import { Box, Flex, Heading, Text } from "@/main";

const meta: Meta = {
  title: "Composition/Typography",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj;

export const Marketing: Story = {
  render: () => (
    <Flex direction="col" gap="12" className="h-screen max-w-3xl">
      <Box className="space-y-6">
        <Heading level="1" size="5xl" weight="extrabold" tracking="tight">
          Build your next project with our primitives
        </Heading>
        <Text size="lg" variant="muted" leading="relaxed">
          A collection of essential UI components designed for modern web applications, built with Tailwind CSS and
          following shadcn/ui patterns.
        </Text>
      </Box>

      <Box className="space-y-4 rounded-lg bg-card p-6 shadow-md">
        <Heading level="2" variant="accent" size="xl">
          Product Features
        </Heading>

        <Flex direction="col" gap="2">
          <Flex direction="row" gap="2" align="center">
            <Box className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">✓</Box>
            <Text>Fully accessible components</Text>
          </Flex>

          <Flex direction="row" gap="2" align="center">
            <Box className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">✓</Box>
            <Text>Built with Tailwind CSS</Text>
          </Flex>

          <Flex direction="row" gap="2" align="center">
            <Box className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">✓</Box>
            <Text>Follows shadcn/ui patterns</Text>
          </Flex>
        </Flex>
      </Box>

      <Box className="rounded-lg bg-muted p-8">
        <Heading level="3" align="center" size="2xl" tracking="tight" className="mb-6">
          Pricing Plans
        </Heading>

        <Flex direction="row" gap="6" wrap="wrap">
          <Box className="min-w-64 flex-1 rounded-lg bg-card p-6 shadow-sm">
            <Heading level="4" size="lg">
              Basic
            </Heading>
            <Heading level="3" size="3xl" className="mt-2 mb-4">
              $9/mo
            </Heading>
            <Text variant="muted">Perfect for small projects</Text>
          </Box>

          <Box className="min-w-64 flex-1 rounded-lg bg-primary p-6 shadow-md">
            <Heading variant="primary" level="4" size="lg">
              Pro
            </Heading>
            <Heading variant="primary" level="3" size="3xl" className="mt-2 mb-4">
              $29/mo
            </Heading>
            <Text variant="primary">For growing businesses</Text>
          </Box>
        </Flex>
      </Box>
    </Flex>
  ),
};

export const Documentation: Story = {
  render: () => (
    <Box className="h-screen max-w-3xl space-y-12">
      <Box className="space-y-2">
        <Heading level="1" size="5xl" weight="extrabold" tracking="tight">
          The Complete Guide
        </Heading>
        <Heading level="2" size="xl" variant="muted" weight="normal">
          Everything you need to know about our product
        </Heading>
      </Box>

      <Box className="space-y-6">
        <Heading level="2" size="3xl" tracking="tight">
          Getting Started
        </Heading>

        <Text leading="relaxed">
          Welcome to our comprehensive guide. This document will walk you through all the features and capabilities of
          our platform, helping you get the most out of your experience.
        </Text>

        <Box className="space-y-4">
          <Heading level="3" size="xl">
            Installation
          </Heading>

          <Text>
            Installing our product is straightforward. Follow these simple steps to get up and running in no time.
          </Text>

          <Box className="ml-4 space-y-2">
            <Heading level="4" size="lg">
              Prerequisites
            </Heading>
            <Text>Before you begin, ensure you have the following tools installed on your system.</Text>

            <Heading level="5" size="base">
              System Requirements
            </Heading>
            <ul>
              <Text as="li">Operating System: Windows 10+, macOS 10.15+, or Linux</Text>
              <Text as="li">Memory: 4GB RAM minimum, 8GB recommended</Text>
              <Text as="li">Storage: 1GB of available space</Text>
            </ul>

            <Heading level="6" size="sm" weight="medium">
              Optional Dependencies
            </Heading>
            <Text>Additional tools that may enhance your experience.</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  ),
};

export const LandingPage: Story = {
  render: () => (
    <Flex direction="col" gap="16" className="h-screen max-w-3xl">
      <Box className="space-y-6 text-center">
        <Heading level="1" size="5xl" weight="extrabold" tracking="tight">
          Transform your workflow with AI
        </Heading>
        <Text size="xl" variant="muted" leading="relaxed" align="center" className="mx-auto max-w-2xl">
          Our platform helps teams streamline processes and boost productivity with intelligent automation.
        </Text>
      </Box>

      <Box className="space-y-6">
        <Heading level="2" size="4xl" weight="bold" tracking="tight" align="center">
          Designed for the modern workforce
        </Heading>
        <Flex direction="row" gap="6" wrap="wrap" justify="center">
          <Box className="min-w-64 max-w-80 flex-1 space-y-2 text-center">
            <Heading level="3" size="xl">
              Intuitive Interface
            </Heading>
            <Text variant="muted">User-friendly design that requires minimal training</Text>
          </Box>
          <Box className="min-w-64 max-w-80 flex-1 space-y-2 text-center">
            <Heading level="3" size="xl">
              Powerful Integrations
            </Heading>
            <Text variant="muted">Connects seamlessly with your existing tools</Text>
          </Box>
          <Box className="min-w-64 max-w-80 flex-1 space-y-2 text-center">
            <Heading level="3" size="xl">
              Advanced Analytics
            </Heading>
            <Text variant="muted">Gain valuable insights from comprehensive reporting</Text>
          </Box>
        </Flex>
      </Box>

      <Box className="space-y-6 rounded-lg bg-muted p-8">
        <Heading level="2" size="3xl" weight="bold" align="center">
          Join thousands of satisfied customers
        </Heading>
        <Text size="lg" align="center" className="mx-auto max-w-2xl">
          "This platform has revolutionized how our team works. We've seen a 40% increase in productivity since
          implementation."
        </Text>
        <Text weight="medium" align="center">
          — Sarah Johnson, CTO at TechCorp
        </Text>
      </Box>
    </Flex>
  ),
};

export const Blog: Story = {
  render: () => (
    <Box className="h-screen max-w-2xl space-y-8">
      <Box className="space-y-2">
        <Heading level="1" size="4xl" weight="bold" tracking="tight">
          The Future of Web Development
        </Heading>
        <Flex direction="row" gap="2" align="center">
          <Text size="sm" variant="muted">
            Published on March 1, 2025
          </Text>
          <Text size="sm" variant="muted">
            •
          </Text>
          <Text size="sm" variant="muted">
            15 min read
          </Text>
        </Flex>
      </Box>

      <Text size="lg" leading="relaxed">
        The web development landscape continues to evolve at a rapid pace. New frameworks, tools, and methodologies
        emerge regularly, reshaping how developers approach building for the web.
      </Text>

      <Box className="space-y-4">
        <Heading level="2" size="2xl" tracking="tight">
          The Rise of Component-Based Architecture
        </Heading>
        <Text leading="relaxed">
          Component-based architecture has transformed how developers structure applications. By breaking interfaces
          down into reusable, independent pieces, teams can work more efficiently and maintain consistency across large
          projects.
        </Text>

        <Box className="mt-4 space-y-2">
          <Heading level="3" size="xl">
            Benefits of Primitive Components
          </Heading>
          <Text leading="relaxed">
            Primitive components form the foundation of scalable design systems. These low-level building blocks provide
            flexibility while ensuring consistency throughout an application.
          </Text>
        </Box>
      </Box>

      <Box className="space-y-4">
        <Heading level="2" size="2xl" tracking="tight">
          Looking Ahead
        </Heading>
        <Text leading="relaxed">
          As we look to the future, several trends are shaping the next generation of web development. From AI-assisted
          coding to enhanced accessibility standards, the industry continues to evolve in exciting ways.
        </Text>
      </Box>
    </Box>
  ),
};

export const Announcement: Story = {
  render: () => (
    <Flex direction="col" align="center" justify="center" className="h-screen">
      <Box className="max-w-3xl rounded-lg bg-card p-6 shadow-sm">
        <Text size="lg" weight="semibold" variant="default" className="mb-2">
          Product Announcement
        </Text>

        <Text variant="muted" className="mb-4">
          Posted on March 1, 2025
        </Text>

        <Text leading="relaxed" className="mb-4">
          We're excited to announce our new product line that will revolutionize how you interact with our services. The
          new features include improved performance, better user experience, and more customization options.
        </Text>

        <Text size="sm" variant="accent" weight="medium">
          Read the full announcement →
        </Text>
      </Box>
    </Flex>
  ),
};

export const Notice: Story = {
  render: () => (
    <Flex direction="col" align="center" justify="center" className="h-screen">
      <Box className="max-w-3xl rounded-lg bg-destructive/10 p-6">
        <Text weight="semibold" variant="destructive" className="mb-2">
          Important Notice
        </Text>

        <Text variant="destructive" size="sm">
          Your subscription will expire in 3 days. Please renew to avoid service interruption.
        </Text>
      </Box>
    </Flex>
  ),
};

export const Testimonial: Story = {
  render: () => (
    <Flex direction="col" align="center" justify="center" className="h-screen">
      <Box className="max-w-3xl rounded-lg bg-muted p-6">
        <Text align="center" weight="bold" className="mb-4">
          Testimonials
        </Text>

        <Text align="center" size="sm" leading="relaxed" className="italic">
          "This product has completely transformed our workflow. The time saved has allowed our team to focus on what
          really matters — innovation."
        </Text>

        <Text align="center" size="xs" variant="muted" className="mt-2">
          — Jane Doe, CEO at Example Corp
        </Text>
      </Box>
    </Flex>
  ),
};
