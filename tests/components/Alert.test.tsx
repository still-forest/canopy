import { render, screen, within } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom";

import { Alert } from "@/components";

describe("Alert", () => {
  test("renders info Alert", async () => {
    render(
      <Alert variant="info">
        <Alert.Content>
          <Alert.Title>Important Information</Alert.Title>
          <Alert.Description>This is an important message.</Alert.Description>
        </Alert.Content>
      </Alert>,
    );

    const alert = screen.getByRole("alert");
    expect(alert).toBeInTheDocument();
    expect(alert.className).toEqual("alert alert-info");

    expect(within(alert).getByText("Important Information")).toBeInTheDocument();
    expect(within(alert).getByText("This is an important message.")).toBeInTheDocument();
  });

  test("renders success Alert", async () => {
    render(
      <Alert variant="success">
        <Alert.Content>
          <Alert.Title>Important Information</Alert.Title>
          <Alert.Description>This is an important message.</Alert.Description>
        </Alert.Content>
      </Alert>,
    );

    const alert = screen.getByRole("alert");
    expect(alert).toBeInTheDocument();
    expect(alert.className).toEqual("alert alert-success");

    expect(within(alert).getByText("Important Information")).toBeInTheDocument();
    expect(within(alert).getByText("This is an important message.")).toBeInTheDocument();
  });

  test("renders warning Alert", async () => {
    render(
      <Alert variant="warning">
        <Alert.Content>
          <Alert.Title>Important Information</Alert.Title>
          <Alert.Description>This is an important message.</Alert.Description>
        </Alert.Content>
      </Alert>,
    );

    const alert = screen.getByRole("alert");
    expect(alert).toBeInTheDocument();
    expect(alert.className).toEqual("alert alert-warning");

    expect(within(alert).getByText("Important Information")).toBeInTheDocument();
    expect(within(alert).getByText("This is an important message.")).toBeInTheDocument();
  });

  test("renders error Alert", async () => {
    render(
      <Alert variant="danger">
        <Alert.Content>
          <Alert.Title>Important Information</Alert.Title>
          <Alert.Description>This is an important message.</Alert.Description>
        </Alert.Content>
      </Alert>,
    );

    const alert = screen.getByRole("alert");
    expect(alert).toBeInTheDocument();
    expect(alert.className).toEqual("alert alert-error");

    expect(within(alert).getByText("Important Information")).toBeInTheDocument();
    expect(within(alert).getByText("This is an important message.")).toBeInTheDocument();
  });
});
