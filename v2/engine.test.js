'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { calculate, initialState, isZeroMarginUnder } = require('./engine');

function candidate(overrides = {}) {
  return {
    eventId: 'event-1', market: 'Equipe A vence', marketType: 'match-result',
    league: 'Brasileirao Serie A', stake: 2.5, odds: 2.2, modelProbability: 0.52,
    capturedAt: '2026-08-29T12:00:00-03:00', ...overrides
  };
}

test('allows a bounded, evidenced simulation', () => {
  assert.equal(calculate(candidate(), initialState()).status, 'SIMULATION_READY');
});

test('blocks a duplicate event', () => {
  const state = initialState();
  state.positions.push({ eventId: 'event-1', market: 'Outro mercado', stake: 2.5 });
  assert.equal(calculate(candidate(), state).status, 'BLOCKED');
});

test('blocks a stake above 5 percent', () => {
  assert.equal(calculate(candidate({ stake: 2.51 }), initialState()).status, 'BLOCKED');
});

test('identifies the zero-margin under guard', () => {
  assert.equal(isZeroMarginUnder({ marketType: 'under', minute: 72, goalMargin: 1 }), true);
});
