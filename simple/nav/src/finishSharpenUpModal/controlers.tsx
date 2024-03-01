import create, { GetState, SetState } from 'zustand';
type QuizControlStore = {
	// Refs to the next, previous and save button
	// Used to trigger the click event of the button
	// Do not use the refs directly
	// Use the trigger functions instead
	nextButtonRef: null | (() => void);
	previousButtonRef: null | (() => void);
	saveButtonRef: null | ((trigerNext?: boolean) => void);
	toggleHintButtonRef: null | ((showHint: boolean) => void);
	switchActiveReportsTab: null | ((tab: 'time' | 'results') => void);
	isSaveButtonDisabledFunctionRef: null | (() => boolean);
	// Use to disable the quiz control buttons
	isQuizControlDisabled: boolean;
	isQuizCompleted: boolean;

	isQuizStarted: boolean;
	isPortrait: boolean;

	// Use to trigger the click event of the button
	// Do not use the refs directly
	triggerNextButton: () => void;
	triggerPreviousButton: () => void;
	triggerSaveButton: () => void;
	triggerSwitchActiveReportsTab: (tab: 'time' | 'results') => void;
	// Used to Trigger Hint Hide/Show
	triggertoggleHintButton: (showHint: boolean) => void;

	// Use to check if the save button is disabled or not
	// Sava button is disabled when the user has not attempted any question
	triggerSaveButtonDisabledFunction: () => boolean | undefined;
	// Use to disable the quiz control buttons when the user is attempting a question to  be used In Class Experience
	setQuizControlDisabled: (isDisabled: boolean) => void;
	setNextButtonRef: (nextButtonRef: null | (() => void)) => void;
	setPreviousButtonRef: (previousButtonRef: null | (() => void)) => void;
	setSaveButtonRef: (
		saveButtonRef: null | ((trigerNext?: boolean) => void)
	) => void;
	setToggleHintButtonRef: (
		toggleHintButtonRef: null | ((showHint: boolean) => void)
	) => void;
	setSaveButtonDisabledFunctionRef: (
		isSaveButtonDisabledFunctionRef: null | (() => boolean)
	) => void;
	setSwitchActiveReportsTab: (
		switchActiveReportsTab: null | ((tab: 'time' | 'results') => void)
	) => void;
	setQuizStarted: (isStarted: boolean) => void;

	setQuizCompleted: (isCompleted: boolean) => void;
	// Do not use this function directly
	getQuestionControlRefs: () => QuizControlStore;
	setIsPortrait: (isPortrait: boolean) => void;
};

const storeReducerFunction = (
	set: SetState<QuizControlStore>,
	get: GetState<QuizControlStore>
): QuizControlStore => ({
	nextButtonRef: null,
	previousButtonRef: null,
	saveButtonRef: null,
	toggleHintButtonRef: null,
	isSaveButtonDisabledFunctionRef: null,

	switchActiveReportsTab: null,
	isQuizControlDisabled: false,
	isQuizCompleted: false,
	isQuizStarted: false,
	isPortrait: false,

	setIsPortrait: (isPortrait: boolean) => {
		set((state: QuizControlStore) => ({
			...state,
			isPortrait,
		}));
	},

	setNextButtonRef: (nextButtonRef: null | (() => void)) => {
		set((state: QuizControlStore) => ({
			...state,
			nextButtonRef,
		}));
	},
	setPreviousButtonRef: (previousButtonRef: null | (() => void)) => {
		set((state: QuizControlStore) => ({
			...state,
			previousButtonRef,
		}));
	},
	setSaveButtonRef: (saveButtonRef: null | (() => void)) => {
		set((state: QuizControlStore) => ({
			...state,
			saveButtonRef,
		}));
	},

	setToggleHintButtonRef: (
		toggleHintButtonRef: null | ((showHint: boolean) => void)
	) => {
		set((state: QuizControlStore) => ({
			...state,
			toggleHintButtonRef,
		}));
	},
	setSaveButtonDisabledFunctionRef: (
		isSaveButtonDisabledFunctionRef: null | (() => boolean)
	) => {
		set((state: QuizControlStore) => ({
			...state,
			isSaveButtonDisabledFunctionRef,
		}));
	},
	setQuizControlDisabled: (isDisabled: boolean) => {
		set((state: QuizControlStore) => ({
			...state,
			isQuizControlDisabled: isDisabled,
		}));
	},

	setQuizCompleted: (isCompleted: boolean) => {
		set((state: QuizControlStore) => ({
			...state,
			isQuizCompleted: isCompleted,
		}));
	},
	setQuizStarted: (isStarted: boolean) => {
		set((state: QuizControlStore) => ({
			...state,
			isQuizStarted: isStarted,
		}));
	},
	setSwitchActiveReportsTab: (
		switchActiveReportsTab: null | ((tab: 'time' | 'results') => void)
	) => {
		set((state: QuizControlStore) => ({
			...state,
			switchActiveReportsTab,
		}));
	},

	triggerNextButton: () => {
		get().nextButtonRef?.();
	},
	triggerPreviousButton: () => {
		get().previousButtonRef?.();
	},
	triggerSaveButton: (trigerNext?: boolean) => {
		get().saveButtonRef?.(trigerNext);
	},
	triggertoggleHintButton: (showHint: boolean) => {
		get().toggleHintButtonRef?.(showHint);
	},
	triggerSaveButtonDisabledFunction: () => {
		return get().isSaveButtonDisabledFunctionRef?.();
	},
	triggerSwitchActiveReportsTab: (tab: 'time' | 'results') => {
		get().switchActiveReportsTab?.(tab);
	},

	getQuestionControlRefs: () => {
		return get();
	},
});

export const useQuizControlStore =
	create<QuizControlStore>(storeReducerFunction);
