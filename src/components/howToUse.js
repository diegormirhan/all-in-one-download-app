import { useTranslations } from 'next-intl'

export function HowToUse({ classes, namespace }) {
    const tDynamic = useTranslations(`Translations-${namespace}`)
    const tDefault = useTranslations('Translations-Default')

    return (
        <>
            <div className="space-y-4 w-full px-2 md:px-0">
                <div className={`inline-block font-bold text-2xl lg:text-3xl mb-2 border-b-4 ${classes}`}>
                    {tDefault('howToUse-title')}
                </div>
                <div className={`space-y-2 border-b-2 pb-4 ${classes}`}>
                    <h2 className="text-xl font-semibold text-gray-700">
                        {tDynamic('howToUse-step1-title')}
                    </h2>
                    <p className="text-gray-600">
                        {tDynamic('howToUse-step1-item1')}
                    </p>
                    <p className="text-gray-600">
                        {tDynamic('howToUse-step1-item2')}
                    </p>
                    <p className="text-gray-600">
                        {tDynamic('howToUse-step1-item3')}
                    </p>
                </div>

                <div className={`space-y-2 border-b-2 pb-4 ${classes}`}>
                    <h2 className="text-xl font-semibold text-gray-700">
                        {tDynamic('howToUse-step2-title')}
                    </h2>
                    <p className="text-gray-600">
                        {tDynamic('howToUse-step2-item1')}
                    </p>
                    <p className="text-gray-600">
                        {tDynamic('howToUse-step2-item2')}
                    </p>
                    <p className="text-gray-600">
                        {tDynamic('howToUse-step2-item3')}
                    </p>
                </div>

                <div className={`space-y-2 border-b-2 pb-4 ${classes}`}>
                    <h2 className="text-xl font-semibold text-gray-700">
                        {tDynamic('howToUse-step3-title')}
                    </h2>
                    <p className="text-gray-600">
                        {tDynamic('howToUse-step3-item1')}
                    </p>
                    <p className="text-gray-600">
                        {tDynamic('howToUse-step3-item2')}
                    </p>
                    <p className="text-gray-600">
                        {tDynamic('howToUse-step3-item3')}
                    </p>
                </div>

                <div className={`space-y-2 border-b-2 pb-4 ${classes}`}>
                    <h2 className="text-xl font-semibold text-gray-700">
                        {tDynamic('howToUse-step4-title')}
                    </h2>
                    <p className="text-gray-600">
                        {tDynamic('howToUse-step4-item1')}
                    </p>
                    <p className="text-gray-600">
                        {tDynamic('howToUse-step4-item2')}
                    </p>
                    <p className="text-gray-600">
                        {tDynamic('howToUse-step4-item3')}
                    </p>
                </div>
            </div>
        </>
    )
}