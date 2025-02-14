import { useContext } from 'react';

import { AppContext } from 'app/providers/app';
import { BlocksContext } from 'app/providers/blocks';
import { ChainContext } from 'app/providers/chain';
import { EventsContext } from 'app/providers/events';
import { ModalContext } from 'app/providers/modal';
import { OnboardingContext } from 'app/providers/onboarding';

const useApp = () => useContext(AppContext);
const useBlocks = () => useContext(BlocksContext);
const useEvents = () => useContext(EventsContext);
const useModal = () => useContext(ModalContext);
const useChain = () => useContext(ChainContext);
const useOnboarding = () => useContext(OnboardingContext);

export { useApp, useBlocks, useEvents, useModal, useChain, useOnboarding };
