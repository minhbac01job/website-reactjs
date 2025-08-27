import TitleContent from "../../components/title-content/TitleContent";
import { CardSkills, SkillCardProps } from "./Skill";
import { useTranslation } from "react-i18next";

const SkillHorizontal = ({ skills }: { skills: SkillCardProps[] }) => {
    const { t } = useTranslation();
    const list = skills.map((skill) => CardSkills(skill));
    return (
        <>
            <TitleContent content={t("skills")} />
            <div className="flex gap-2 flex-wrap justify-center">
                {list}
            </div>
        </>

    );
}
export default SkillHorizontal;