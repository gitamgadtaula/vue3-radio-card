/* __placeholder__ */
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const model = defineModel();
const __VLS_props = defineProps({ options: (Array), title: String });
function handleOptionClick(option) {
    model.value = option;
}
let __VLS_propsOption_defineProp;
let __VLS_modelEmitsType;
const __VLS_componentsOption = {};
let __VLS_name;
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    /* CSS variable injection */
    /* CSS variable injection end */
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.form;
    __VLS_intrinsicElements.form;
    __VLS_intrinsicElements.fieldset;
    __VLS_intrinsicElements.fieldset;
    __VLS_intrinsicElements.legend;
    __VLS_intrinsicElements.legend;
    __VLS_intrinsicElements.label;
    __VLS_intrinsicElements.label;
    __VLS_intrinsicElements.span;
    __VLS_intrinsicElements.span;
    __VLS_intrinsicElements.span;
    __VLS_intrinsicElements.span;
    __VLS_intrinsicElements.span;
    __VLS_intrinsicElements.span;
    __VLS_intrinsicElements.input;
    __VLS_intrinsicElements.svg;
    __VLS_intrinsicElements.svg;
    __VLS_intrinsicElements.path;
    {
        const __VLS_0 = __VLS_intrinsicElements["div"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        const __VLS_2 = __VLS_1({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, }));
        {
            const __VLS_5 = __VLS_intrinsicElements["form"];
            const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
            const __VLS_7 = __VLS_6({ ...{}, class: ("w-full max-w-screen-md mx-auto"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
            ({}({ ...{}, class: ("w-full max-w-screen-md mx-auto"), }));
            {
                const __VLS_10 = __VLS_intrinsicElements["fieldset"];
                const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
                const __VLS_12 = __VLS_11({ ...{}, class: ("space-y-6"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
                ({}({ ...{}, class: ("space-y-6"), }));
                if (__VLS_ctx.title) {
                    {
                        const __VLS_15 = __VLS_intrinsicElements["div"];
                        const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
                        const __VLS_17 = __VLS_16({ ...{}, class: ("flex items-center justify-between py-4 border-b border-gray-300"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
                        ({}({ ...{}, class: ("flex items-center justify-between py-4 border-b border-gray-300"), }));
                        {
                            const __VLS_20 = __VLS_intrinsicElements["legend"];
                            const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
                            const __VLS_22 = __VLS_21({ ...{}, class: ("text-2xl text-gray-700 mr-4"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
                            ({}({ ...{}, class: ("text-2xl text-gray-700 mr-4"), }));
                            (__VLS_ctx.title);
                            (__VLS_23.slots).default;
                            const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
                        }
                        (__VLS_18.slots).default;
                        const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
                    }
                    // @ts-ignore
                    [title, title,];
                }
                {
                    const __VLS_25 = __VLS_intrinsicElements["div"];
                    const __VLS_26 = __VLS_elementAsFunctionalComponent(__VLS_25);
                    const __VLS_27 = __VLS_26({ ...{}, class: ("grid sm:grid-cols-4 gap-6"), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
                    ({}({ ...{}, class: ("grid sm:grid-cols-4 gap-6"), }));
                    for (const [option] of __VLS_getVForSourceType((__VLS_ctx.options))) {
                        {
                            const __VLS_30 = __VLS_intrinsicElements["label"];
                            const __VLS_31 = __VLS_elementAsFunctionalComponent(__VLS_30);
                            const __VLS_32 = __VLS_31({ ...{ 'onClick': {}, }, for: ((option.value)), class: ("relative flex flex-col bg-white dark:bg-slate-800 hover:bg-slate-100 hover:dark:bg-slate-700 p-5 rounded-lg shadow-md cursor-pointer"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
                            ({}({ ...{ 'onClick': {}, }, for: ((option.value)), class: ("relative flex flex-col bg-white dark:bg-slate-800 hover:bg-slate-100 hover:dark:bg-slate-700 p-5 rounded-lg shadow-md cursor-pointer"), }));
                            let __VLS_35 = { 'click': __VLS_pickEvent(__VLS_34['click'], {}.onClick) };
                            __VLS_35 = { click: $event => {
                                    __VLS_ctx.handleOptionClick(option.value);
                                    // @ts-ignore
                                    [options, handleOptionClick,];
                                }
                            };
                            {
                                const __VLS_36 = {}.slot;
                                const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ ...{}, ...(option), }));
                                const __VLS_38 = __VLS_37({ ...{}, ...(option), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
                                ({}({ ...{}, ...(option), }));
                                var __VLS_40 = {
                                    ...(option),
                                };
                                {
                                    const __VLS_41 = __VLS_intrinsicElements["span"];
                                    const __VLS_42 = __VLS_elementAsFunctionalComponent(__VLS_41);
                                    const __VLS_43 = __VLS_42({ ...{}, class: ("text-black dark:text-white"), }, ...__VLS_functionalComponentArgsRest(__VLS_42));
                                    ({}({ ...{}, class: ("text-black dark:text-white"), }));
                                    (option.label);
                                    (__VLS_44.slots).default;
                                    const __VLS_44 = __VLS_pickFunctionalComponentCtx(__VLS_41, __VLS_43);
                                }
                                (__VLS_33.slots).default;
                            }
                            {
                                const __VLS_46 = __VLS_intrinsicElements["input"];
                                const __VLS_47 = __VLS_elementAsFunctionalComponent(__VLS_46);
                                const __VLS_48 = __VLS_47({ ...{}, type: ("radio"), name: ((option.value)), id: ((option.value)), value: ((option.value)), class: ("absolute h-0 w-0 appearance-none"), checked: ((option.value === __VLS_ctx.model)), }, ...__VLS_functionalComponentArgsRest(__VLS_47));
                                ({}({ ...{}, type: ("radio"), name: ((option.value)), id: ((option.value)), value: ((option.value)), class: ("absolute h-0 w-0 appearance-none"), checked: ((option.value === __VLS_ctx.model)), }));
                                const __VLS_49 = __VLS_pickFunctionalComponentCtx(__VLS_46, __VLS_48);
                            }
                            {
                                const __VLS_51 = __VLS_intrinsicElements["span"];
                                const __VLS_52 = __VLS_elementAsFunctionalComponent(__VLS_51);
                                const __VLS_53 = __VLS_52({ ...{}, "aria-hidden": ("true"), class: ("hidden absolute inset-0 border-2 border-green-500 bg-green-200 bg-opacity-10 rounded-lg"), }, ...__VLS_functionalComponentArgsRest(__VLS_52));
                                ({}({ ...{}, "aria-hidden": ("true"), class: ("hidden absolute inset-0 border-2 border-green-500 bg-green-200 bg-opacity-10 rounded-lg"), }));
                                {
                                    const __VLS_56 = __VLS_intrinsicElements["span"];
                                    const __VLS_57 = __VLS_elementAsFunctionalComponent(__VLS_56);
                                    const __VLS_58 = __VLS_57({ ...{}, class: ("absolute top-2 right-2 h-4 w-4 md:h-6 md:w-6 inline-flex items-center justify-center rounded-full bg-green-200"), }, ...__VLS_functionalComponentArgsRest(__VLS_57));
                                    ({}({ ...{}, class: ("absolute top-2 right-2 h-4 w-4 md:h-6 md:w-6 inline-flex items-center justify-center rounded-full bg-green-200"), }));
                                    {
                                        const __VLS_61 = __VLS_intrinsicElements["svg"];
                                        const __VLS_62 = __VLS_elementAsFunctionalComponent(__VLS_61);
                                        const __VLS_63 = __VLS_62({ ...{}, xmlns: ("http://www.w3.org/2000/svg"), viewBox: ("0 0 20 20"), fill: ("currentColor"), class: ("h-5 w-5 text-green-600"), }, ...__VLS_functionalComponentArgsRest(__VLS_62));
                                        ({}({ ...{}, xmlns: ("http://www.w3.org/2000/svg"), viewBox: ("0 0 20 20"), fill: ("currentColor"), class: ("h-5 w-5 text-green-600"), }));
                                        {
                                            const __VLS_66 = __VLS_intrinsicElements["path"];
                                            const __VLS_67 = __VLS_elementAsFunctionalComponent(__VLS_66);
                                            const __VLS_68 = __VLS_67({ ...{}, "fill-rule": ("evenodd"), d: ("M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"), "clip-rule": ("evenodd"), }, ...__VLS_functionalComponentArgsRest(__VLS_67));
                                            ({}({ ...{}, "fill-rule": ("evenodd"), d: ("M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"), "clip-rule": ("evenodd"), }));
                                            const __VLS_69 = __VLS_pickFunctionalComponentCtx(__VLS_66, __VLS_68);
                                        }
                                        (__VLS_64.slots).default;
                                        const __VLS_64 = __VLS_pickFunctionalComponentCtx(__VLS_61, __VLS_63);
                                    }
                                    (__VLS_59.slots).default;
                                    const __VLS_59 = __VLS_pickFunctionalComponentCtx(__VLS_56, __VLS_58);
                                }
                                (__VLS_54.slots).default;
                                const __VLS_54 = __VLS_pickFunctionalComponentCtx(__VLS_51, __VLS_53);
                            }
                            (__VLS_33.slots).default;
                            const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
                            let __VLS_34;
                        }
                        // @ts-ignore
                        [model, model,];
                    }
                    (__VLS_28.slots).default;
                    const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27);
                }
                (__VLS_13.slots).default;
                const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
            }
            (__VLS_8.slots).default;
            const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
        }
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["w-full"];
        __VLS_styleScopedClasses["max-w-screen-md"];
        __VLS_styleScopedClasses["mx-auto"];
        __VLS_styleScopedClasses["space-y-6"];
        __VLS_styleScopedClasses["flex"];
        __VLS_styleScopedClasses["items-center"];
        __VLS_styleScopedClasses["justify-between"];
        __VLS_styleScopedClasses["py-4"];
        __VLS_styleScopedClasses["border-b"];
        __VLS_styleScopedClasses["border-gray-300"];
        __VLS_styleScopedClasses["text-2xl"];
        __VLS_styleScopedClasses["text-gray-700"];
        __VLS_styleScopedClasses["mr-4"];
        __VLS_styleScopedClasses["grid"];
        __VLS_styleScopedClasses["sm:grid-cols-4"];
        __VLS_styleScopedClasses["gap-6"];
        __VLS_styleScopedClasses["relative"];
        __VLS_styleScopedClasses["flex"];
        __VLS_styleScopedClasses["flex-col"];
        __VLS_styleScopedClasses["bg-white"];
        __VLS_styleScopedClasses["dark:bg-slate-800"];
        __VLS_styleScopedClasses["hover:bg-slate-100"];
        __VLS_styleScopedClasses["hover:dark:bg-slate-700"];
        __VLS_styleScopedClasses["p-5"];
        __VLS_styleScopedClasses["rounded-lg"];
        __VLS_styleScopedClasses["shadow-md"];
        __VLS_styleScopedClasses["cursor-pointer"];
        __VLS_styleScopedClasses["text-black"];
        __VLS_styleScopedClasses["dark:text-white"];
        __VLS_styleScopedClasses["absolute"];
        __VLS_styleScopedClasses["h-0"];
        __VLS_styleScopedClasses["w-0"];
        __VLS_styleScopedClasses["appearance-none"];
        __VLS_styleScopedClasses["hidden"];
        __VLS_styleScopedClasses["absolute"];
        __VLS_styleScopedClasses["inset-0"];
        __VLS_styleScopedClasses["border-2"];
        __VLS_styleScopedClasses["border-green-500"];
        __VLS_styleScopedClasses["bg-green-200"];
        __VLS_styleScopedClasses["bg-opacity-10"];
        __VLS_styleScopedClasses["rounded-lg"];
        __VLS_styleScopedClasses["absolute"];
        __VLS_styleScopedClasses["top-2"];
        __VLS_styleScopedClasses["right-2"];
        __VLS_styleScopedClasses["h-4"];
        __VLS_styleScopedClasses["w-4"];
        __VLS_styleScopedClasses["md:h-6"];
        __VLS_styleScopedClasses["md:w-6"];
        __VLS_styleScopedClasses["inline-flex"];
        __VLS_styleScopedClasses["items-center"];
        __VLS_styleScopedClasses["justify-center"];
        __VLS_styleScopedClasses["rounded-full"];
        __VLS_styleScopedClasses["bg-green-200"];
        __VLS_styleScopedClasses["h-5"];
        __VLS_styleScopedClasses["w-5"];
        __VLS_styleScopedClasses["text-green-600"];
    }
    var __VLS_slots;
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            model: model,
            handleOptionClick: handleOptionClick,
        };
    },
    props: {
        ...{ options: (Array), title: String },
        ...__VLS_propsOption_defineProp,
    },
    emits: {},
});
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        ...{ options: (Array), title: String },
        ...__VLS_propsOption_defineProp,
    },
    emits: {},
});
export default {};
