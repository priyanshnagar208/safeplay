import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import { colors } from "../theme";
import Container from "./Container";

const CrownIcon = (props) => (
  <svg
    viewBox="0 0 20 20"
    fill="currentColor"
    width={18}
    height={18}
    aria-hidden="true"
    {...props}
  >
    <path d="M2.5 7l3.5 5 4.5-8 4.5 8 3.5-5L17 17H3L2.5 7z" />
  </svg>
);

const CheckIcon = (props) => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    width={18}
    height={18}
    aria-hidden="true"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M5 10l4 4 6-8" />
  </svg>
);

const Section = styled.section`
  width: 100%;
  background-color: ${colors.bg};
  color: ${colors.text};
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  padding: 5rem 0 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;


const HeadingArea = styled.div`
  max-width: 680px;
  text-align: center;
  margin-bottom: 3rem;
  margin-left: auto;
  margin-right: auto;
`;

const Title = styled.h2`
  font-weight: 900;
  font-size: 2.75rem;
  color: ${colors.primary};
  margin-bottom: 0.5rem;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-weight: 400;
  font-size: 1.125rem;
  color: ${colors.subtext};
  opacity: 0.75;
  margin-bottom: 2.5rem;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ToggleWrapper = styled.div`
  display: inline-flex;
  border-radius: 9999px;
  border: 1.5px solid ${colors.border};
  user-select: none;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

const ToggleButton = styled.button`
  background: transparent;
  border: none;
  padding: 0.65rem 2rem;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  color: ${colors.text};
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.4rem;

  &:hover:not(.active) {
    background-color: rgba(255, 255, 255, 0.07);
  }

  &.active {
    background-color: ${colors.primary};
    color: ${colors.bg};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  }
`;

const SaveBadge = styled.span`
  background-color: #dcfce7; /* A soft green for 'Save 20%' */
  color: #166534;
  font-weight: 700;
  font-size: 0.65rem;
  padding: 0.18rem 0.55rem;
  border-radius: 9999px;
  margin-left: 0.5rem;
  user-select: none;
`;

const CardsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: ${colors.card};
  border-radius: 1.25rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 100%;
  max-width: 500px;
  flex: 1 1 300px;
  max-width: 100%;
  box-sizing: border-box;

  ${(props) =>
    props.popular &&
    css`
      border: 2.5px solid ${colors.primary};
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
      transform: translateY(-6px);
      z-index: 1;
    `}

  &:hover {
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.05);
    transform: translateY(-8px);
  }

  &:nth-child(3) {
    @media (min-width: 769px) {
      width: 100%;
      justify-self: center;
    }
  }

  @media (max-width: 768px) {
    padding: 1.8rem;
  }
`;

const PopularTag = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background-color: ${colors.primary};
  color: ${colors.bg};
  padding: 0.4rem 1.1rem;
  font-weight: 700;
  font-size: 0.8rem;
  border-radius: 9999px;
  box-shadow: 0 5px 12px rgba(0, 0, 0, 0.05);
`;

const PlanTitle = styled.h3`
  font-weight: 700;
  font-size: 1.4rem;
  color: ${colors.text};
  margin-bottom: 1rem;
`;

const PriceRow = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0.5rem;
  margin-bottom: 0.3rem;
`;

const PriceAmount = styled.span`
  font-weight: 900;
  font-size: 2.75rem;
  color: ${colors.primary};
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const PricePeriod = styled.span`
  font-weight: 600;
  font-size: 1.1rem;
  color: ${colors.text};
  opacity: 0.7;
  margin-bottom: 3px;
`;

const YearlyInfo = styled.span`
  font-weight: 500;
  font-size: 0.9rem;
  color: ${colors.text};
  opacity: 0.55;
  margin-bottom: 1.8rem;
  display: block;
`;

const StartButton = styled.button`
  background-color: ${colors.primary};
  color: ${colors.bg};
  font-weight: 700;
  font-size: 1rem;
  border: none;
  border-radius: 0.9rem;
  padding: 0.9rem 2.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  margin-bottom: 1.5rem;
  box-shadow: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${colors.primaryHover};
  }

  @media (max-width: 768px) {
    padding: 0.75rem 1.8rem;
    font-size: 0.95rem;
  }
`;

const Features = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  color: ${colors.text};
  font-size: 0.95rem;
  font-weight: 500;
  text-align: left;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  opacity: 0.8;
`;

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const navigate = useNavigate();

  const monthlyPrices = {
    Starter: 5,
    Pro: 17,
    Enterprise: null,
  };

  const features = {
    Starter: [
      "Up to 500 players/month",
      "Player KYC verification",
      "Cheater history checks (basic)",
      "Email support",
      "No API access",
    ],
    Pro: [
      "All Starter features +",
      "Up to 3,000 players/month",
      "Advanced player verification",
      "Full access to Players database",
      "API access",
    ],
    Enterprise: [
      "Dedicated account manager",
      "All Pro features +",
      "Unlimited players",
      "Custom integrations",
      "White-labeling",
      "SLA & compliance features",
      "24/7 premium support",
    ],
  };

  const plans = [
    { name: "Starter", popular: false },
    { name: "Pro", popular: true },
    { name: "Enterprise", popular: false },
  ];

  const formatPrice = (plan) => {
    if (plan === "Enterprise") return "Custom";
    const basePrice = monthlyPrices[plan];
    if (billingCycle === "monthly") {
      return `$${basePrice}`;
    }
    const discountedMonthly = (basePrice * 0.8).toFixed(2);
    return `$${parseFloat(discountedMonthly)}`;
  };

  const yearlyBillingText = (plan) => {
    if (billingCycle === "yearly" && plan !== "Enterprise") {
      const basePrice = monthlyPrices[plan];
      const totalYearly = (basePrice * 12 * 0.8).toFixed(2);
      return `Billed $${parseFloat(totalYearly)}/year`;
    }
    return null;
  };

  return (
    <Section id="pricing" aria-label="Pricing Plans">
      <Container>
        <HeadingArea>
          <Title>Flexible Plans for All</Title>
          <Subtitle>Choose a plan that fits your goals and scale as you grow.</Subtitle>
          <ToggleWrapper role="group" aria-label="Billing cycle toggle">
            <ToggleButton
              className={billingCycle === "monthly" ? "active" : ""}
              onClick={() => setBillingCycle("monthly")}
              aria-pressed={billingCycle === "monthly"}
              aria-label="Monthly billing"
            >
              Monthly
            </ToggleButton>
            <ToggleButton
              className={billingCycle === "yearly" ? "active" : ""}
              onClick={() => setBillingCycle("yearly")}
              aria-pressed={billingCycle === "yearly"}
              aria-label="Yearly billing"
            >
              Yearly
              <SaveBadge>Save 20%</SaveBadge>
            </ToggleButton>
          </ToggleWrapper>
        </HeadingArea>

        <CardsGrid>
          {plans.map(({ name, popular }) => (
            <Card key={name} popular={popular} aria-label={`${name} plan`}>
              {popular && <PopularTag>Popular</PopularTag>}
              <PlanTitle>{name}</PlanTitle>
              <PriceRow>
                <PriceAmount>{formatPrice(name)}</PriceAmount>
                {name !== "Enterprise" && <PricePeriod>/month</PricePeriod>}
              </PriceRow>
              {yearlyBillingText(name) && <YearlyInfo>{yearlyBillingText(name)}</YearlyInfo>}
              <StartButton
                aria-label={`Get started with ${name} plan`}
                onClick={() => navigate("/schedule")}
              >
                <CrownIcon
                  style={{ color: "#fbbf24" }}
                  aria-hidden="true"
                />
                Get Started
              </StartButton>
              <Features>
                {features[name].map((feature, idx) => (
                  <FeatureItem key={idx}>
                    <CheckIcon aria-hidden="true" stroke={colors.primary} />
                    {feature}
                  </FeatureItem>
                ))}
              </Features>
            </Card>
          ))}
        </CardsGrid>
      </Container>
    </Section>
  );
};

export default PricingSection;